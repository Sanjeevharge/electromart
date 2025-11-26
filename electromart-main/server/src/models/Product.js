import mongoose from 'mongoose';

const specSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    alt: { type: String, default: '' },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    brand: { type: String, required: true },
    category: { type: String, required: true, index: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: Number,
    discountPercentage: Number,
    stock: { type: Number, default: 0 },
    rating: { type: Number, default: 4.6 },
    reviewCount: { type: Number, default: 0 },
    heroImage: { type: String, required: true },
    gallery: [imageSchema],
    badges: [String],
    colors: [String],
    storageOptions: [String],
    highlights: [String],
    specs: [specSchema],
    warranty: { type: String, default: '2-year global warranty' },
    shipsFrom: { type: String, default: 'Electromart Express Fulfilment' },
    availability: {
      online: { type: Boolean, default: true },
      retail: { type: Boolean, default: true },
      expressShipping: { type: Boolean, default: false },
    },
    isFeatured: { type: Boolean, default: false },
    isNewArrival: { type: Boolean, default: false },
    tags: [String],
  },
  {
    timestamps: true,
  }
);

productSchema.index({ name: 'text', brand: 'text', category: 'text', tags: 'text' });

const Product = mongoose.model('Product', productSchema);

export default Product;
