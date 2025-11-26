import { z } from 'zod';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/errorHandler.js';

const orderSchema = z.object({
  items: z
    .array(
      z.object({
        productId: z.string(),
        quantity: z.number().min(1),
        selectedColor: z.string().optional(),
        selectedStorage: z.string().optional(),
      })
    )
    .min(1),
  customer: z.object({
    fullName: z.string(),
    email: z.string().email(),
    phone: z.string(),
  }),
  shipping: z.object({
    line1: z.string(),
    line2: z.string().optional(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postalCode: z.string(),
  }),
  paymentMethod: z.enum(['card', 'upi', 'cod']),
});

export const createOrder = asyncHandler(async (req, res) => {
  const payload = orderSchema.parse(req.body);

  const productIds = payload.items.map((item) => item.productId);
  const products = await Product.find({ _id: { $in: productIds } });

  if (products.length !== payload.items.length) {
    throw new ApiError(400, 'One or more products are unavailable');
  }

  const orderItems = payload.items.map((item) => {
    const product = products.find((prod) => prod._id.toString() === item.productId);
    return {
      product: product._id,
      name: product.name,
      slug: product.slug,
      heroImage: product.heroImage,
      quantity: item.quantity,
      unitPrice: product.price,
      totalPrice: product.price * item.quantity,
      selectedColor: item.selectedColor,
      selectedStorage: item.selectedStorage,
    };
  });

  const subtotal = orderItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const shippingFee = subtotal > 1500 ? 0 : 19.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingFee + tax;

  const order = await Order.create({
    items: orderItems,
    subtotal,
    shippingFee,
    tax,
    total,
    paymentMethod: payload.paymentMethod,
    shippingAddress: {
      ...payload.customer,
      ...payload.shipping,
    },
  });

  res.status(201).json({
    message: 'Order placed successfully',
    data: order,
  });
});

