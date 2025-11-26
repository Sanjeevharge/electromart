export type Product = {
  _id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  stock: number;
  rating: number;
  reviewCount?: number;
  heroImage: string;
  gallery?: { url: string; alt?: string }[];
  badges?: string[];
  colors?: string[];
  storageOptions?: string[];
  highlights?: string[];
  specs?: { label: string; value: string }[];
  warranty?: string;
  shipsFrom?: string;
  availability?: {
    online: boolean;
    retail: boolean;
    expressShipping: boolean;
  };
  isFeatured?: boolean;
  isNewArrival?: boolean;
  tags?: string[];
};

export type Category = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  heroImage: string;
  accentColor?: string;
  featured?: Product[];
};

export type OrderPayload = {
  items: {
    productId: string;
    quantity: number;
    selectedColor?: string;
    selectedStorage?: string;
  }[];
  customer: {
    fullName: string;
    email: string;
    phone: string;
  };
  shipping: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  paymentMethod: 'card' | 'upi' | 'cod';
};

