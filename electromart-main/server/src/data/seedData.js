export const categories = [
  {
    name: 'Smartphones',
    slug: 'smartphones',
    description: 'Latest 5G flagships and value phones loved across India.',
    heroImage:
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    accentColor: '#2563eb',
  },
  {
    name: 'Laptops & Tablets',
    slug: 'laptops-tablets',
    description: 'Work, study, and entertainment on trusted Indian favourites.',
    heroImage:
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    accentColor: '#8b5cf6',
  },
  {
    name: 'Televisions',
    slug: 'televisions',
    description: '4K smart TVs with Dolby sound for living rooms across India.',
    heroImage: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    accentColor: '#f97316',
  },
  {
    name: 'Home Appliances',
    slug: 'home-appliances',
    description:
      'Efficient ACs, refrigerators and washing machines for Indian homes.',
    heroImage:
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    accentColor: '#10b981',
  },
  {
    name: 'Audio & Wearables',
    slug: 'audio-wearables',
    description: 'Truly wireless earbuds, soundbars and smartwatches.',
    heroImage:
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    accentColor: '#0f172a',
  },
  {
    name: 'Gaming',
    slug: 'gaming',
    description: 'Consoles, accessories, and games for every type of gamer.',
    heroImage:
      'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    accentColor: '#ef4444',
  },
  {
    name: 'Cameras',
    slug: 'cameras',
    description: 'Capture life\'s moments with our range of cameras.',
    heroImage:
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    accentColor: '#f59e0b',
  },
  {
    name: 'Printers & Scanners',
    slug: 'printers-scanners',
    description: 'Get your documents in order with our printers and scanners.',
    heroImage:
      'https://images.pexels.com/photos/3837464/pexels-photo-3837464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    accentColor: '#64748b',
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    description: 'Find the perfect accessories for your devices.',
    heroImage:
      'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    accentColor: '#78716c',
  },
];

export const products = [
  // Smartphones
  {
    name: 'Apple iPhone 15 Pro (128 GB)',
    slug: 'apple-iphone-15-pro-128gb',
    brand: 'Apple',
    category: 'Smartphones',
    shortDescription: 'Premium flagship with A17 Pro and titanium design.',
    description:
      'iPhone 15 Pro brings a lightweight titanium design, USB‑C, A17 Pro chip and an advanced triple‑camera system. Shoot cinematic 4K videos, game on console‑class graphics and stay future ready with 5G across major Indian carriers.',
    price: 129900,
    originalPrice: 134900,
    discountPercentage: 4,
    stock: 18,
    rating: 4.8,
    reviewCount: 1543,
    heroImage:
      'https://images.pexels.com/photos/18463335/pexels-photo-18463335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      {
        url:
          'https://images.pexels.com/photos/18463335/pexels-photo-18463335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'A silver iPhone 15 Pro showing its back and camera system.',
      },
      {
        url:
          'https://images.pexels.com/photos/18463335/pexels-photo-18463335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'A close-up of the iPhone 15 Pro camera module.',
      },
    ],
    badges: ['Bestseller', 'Bank offers'],
    colors: ['Natural Titanium', 'Blue Titanium', 'Black Titanium'],
    storageOptions: ['128 GB', '256 GB', '512 GB'],
    highlights: [
      'A17 Pro chip with 6‑core GPU',
      '48MP main camera with 3x telephoto',
      'Always‑On 120Hz ProMotion display',
      'Made for 5G in India',
    ],
    specs: [
      { label: 'Display', value: '6.1" Super Retina XDR, 120Hz ProMotion' },
      { label: 'Chipset', value: 'Apple A17 Pro, 3nm' },
      {
        label: 'Camera',
        value: '48MP main + 12MP ultra‑wide + 12MP telephoto',
      },
      { label: 'Battery', value: 'Up to 23 hours video playback' },
    ],
    warranty: '1 year Apple India warranty',
    shipsFrom: 'Electromart Fulfilment Centre – Mumbai',
    availability: { online: true, retail: true, expressShipping: true },
    isFeatured: true,
    isNewArrival: true,
    tags: ['smartphone', 'ios', '5g'],
  },
  {
    name: 'Samsung Galaxy S24 Ultra (12 GB, 256 GB)',
    slug: 'samsung-galaxy-s24-ultra-256gb',
    brand: 'Samsung',
    category: 'Smartphones',
    shortDescription: 'S‑Pen flagship with 200MP camera and Galaxy AI.',
    description:
      'Galaxy S24 Ultra combines a 200MP quad camera, S‑Pen productivity and Galaxy AI features like Circle to Search and Live Translate. The armored aluminum frame and Gorilla Glass protect your device from daily Indian commute.',
    price: 129999,
    originalPrice: 139999,
    discountPercentage: 7,
    stock: 25,
    rating: 4.7,
    reviewCount: 2034,
    heroImage:
      'https://images.pexels.com/photos/20113913/pexels-photo-20113913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      {
        url:
          'https://images.pexels.com/photos/20113913/pexels-photo-20113913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'A Samsung Galaxy S24 Ultra in black, showing the screen and S-Pen.',
      },
    ],
    badges: ['Exchange available'],
    colors: ['Titanium Gray', 'Titanium Violet', 'Titanium Black'],
    storageOptions: ['256 GB', '512 GB'],
    highlights: [
      '200MP quad rear camera',
      'S‑Pen included in box',
      'Galaxy AI features for productivity',
      'Bright 120Hz QHD+ display',
    ],
    specs: [
      { label: 'Display', value: '6.8" QHD+ Dynamic AMOLED 2X, 120Hz' },
      { label: 'Processor', value: 'Snapdragon 8 Gen 3 for Galaxy' },
      { label: 'Battery', value: '5000mAh with 45W fast charging' },
      { label: 'OS', value: 'One UI based on Android' },
    ],
    warranty: '1 year manufacturer warranty',
    shipsFrom: 'Electromart Bengaluru Warehouse',
    availability: { online: true, retail: true, expressShipping: true },
    isFeatured: true,
    tags: ['android', '5g', 's-pen'],
  },
  {
    name: 'OnePlus 12R (8 GB, 256 GB)',
    slug: 'oneplus-12r-256gb',
    brand: 'OnePlus',
    category: 'Smartphones',
    shortDescription: 'Performance‑centric 5G flagship killer.',
    description:
      'OnePlus 12R offers a Snapdragon 8 Gen 2 chipset, fluid 120Hz AMOLED display and 100W SUPERVOOC fast charging. Perfect for BGMI, streaming and day‑long battery backup in Indian conditions.',
    price: 39999,
    originalPrice: 42999,
    discountPercentage: 7,
    stock: 40,
    rating: 4.6,
    reviewCount: 5412,
    heroImage:
      'https://images.pexels.com/photos/14744261/pexels-photo-14744261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      {
        url:
          'https://images.pexels.com/photos/14744261/pexels-photo-14744261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'A OnePlus 12R in a dark blue color, on a desk.',
      },
    ],
    badges: ['Bank Cashback'],
    colors: ['Iron Gray', 'Cool Blue'],
    storageOptions: ['128 GB', '256 GB'],
    highlights: ['Snapdragon 8 Gen 2', '120Hz AMOLED', '100W fast charging'],
    specs: [
      { label: 'Display', value: '6.78" 1.5K AMOLED, 120Hz' },
      { label: 'Processor', value: 'Snapdragon 8 Gen 2' },
      { label: 'Battery', value: '5500mAh with 100W SUPERVOOC' },
      { label: 'Camera', value: '50MP Sony main + 8MP ultra‑wide' },
    ],
    warranty: '1 year OnePlus India warranty',
    shipsFrom: 'Electromart Delhi NCR Hub',
    availability: { online: true, retail: false, expressShipping: true },
    isNewArrival: false,
    tags: ['android', 'gaming', '5g'],
  },

  // Laptops & Tablets
  {
    name: 'Apple MacBook Air 13" M2 (8 GB, 256 GB)',
    slug: 'macbook-air-m2-13',
    brand: 'Apple',
    category: 'Laptops & Tablets',
    shortDescription: 'Ultra‑light laptop for students and professionals.',
    description:
      'MacBook Air M2 is ideal for Indian students, creators and working professionals who need all‑day battery, silent performance and a premium liquid retina display. Weighs just 1.24 kg with MagSafe charging and fast Wi‑Fi 6.',
    price: 104990,
    originalPrice: 114900,
    discountPercentage: 9,
    stock: 30,
    rating: 4.8,
    reviewCount: 832,
    heroImage:
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      {
        url:
          'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'A silver MacBook Air on a wooden desk.',
      },
    ],
    badges: ['Student favourite'],
    colors: ['Midnight', 'Starlight', 'Silver'],
    storageOptions: ['256 GB', '512 GB'],
    highlights: [
      'Apple M2 chip',
      '18‑hour battery life',
      'Backlit Magic Keyboard',
    ],
    specs: [
      { label: 'Display', value: '13.6" Liquid Retina' },
      { label: 'RAM', value: '8 GB Unified Memory' },
      { label: 'Storage', value: '256 GB SSD' },
      { label: 'Weight', value: '1.24 kg' },
    ],
    warranty: '1 year Apple India warranty',
    shipsFrom: 'Electromart Mumbai',
    availability: { online: true, retail: true, expressShipping: true },
    isFeatured: true,
    tags: ['laptop', 'macos', 'student'],
  },
  {
    name: 'Lenovo IdeaPad Slim 5 (16 GB, 512 GB SSD)',
    slug: 'lenovo-ideapad-slim-5',
    brand: 'Lenovo',
    category: 'Laptops & Tablets',
    shortDescription: 'Everyday thin & light Windows laptop.',
    description:
      'Lenovo IdeaPad Slim 5 with 13th Gen Intel Core i5, 16 GB RAM and 512 GB SSD is perfect for WFH, MS Office and online classes. Dolby Audio speakers and Full HD IPS display make movies and OTT binge sessions enjoyable.',
    price: 62990,
    originalPrice: 69990,
    discountPercentage: 10,
    stock: 22,
    rating: 4.4,
    reviewCount: 451,
    heroImage:
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      {
        url:
          'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'A Lenovo IdeaPad Slim 5 on a white table.',
      },
    ],
    badges: ['Value pick'],
    colors: ['Cloud Grey'],
    storageOptions: ['512 GB'],
    highlights: ['Intel Core i5 13th Gen', '16 GB RAM', 'Backlit keyboard'],
    specs: [
      { label: 'Display', value: '15.6" FHD IPS' },
      { label: 'Processor', value: 'Intel Core i5 13th Gen' },
      { label: 'RAM', value: '16 GB DDR5' },
      { label: 'Storage', value: '512 GB SSD' },
    ],
    warranty: '1 year onsite warranty',
    shipsFrom: 'Electromart Pune',
    availability: { online: true, retail: true, expressShipping: false },
    tags: ['laptop', 'windows'],
  },
  {
    name: 'Samsung Galaxy Tab S9 FE+ (6 GB, 128 GB, Wi‑Fi)',
    slug: 'samsung-galaxy-tab-s9-fe-plus',
    brand: 'Samsung',
    category: 'Laptops & Tablets',
    shortDescription: 'Large 12.4" AMOLED tablet with S‑Pen.',
    description:
      'Galaxy Tab S9 FE+ is the perfect tablet for Indian creators and binge watchers. The 12.4
