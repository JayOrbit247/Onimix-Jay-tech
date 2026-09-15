export interface Product {
  id: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'Dell' | 'HP' | 'Lenovo' | 'ASUS' | 'Anker' | 'UGREEN' | 'Baseus';
  category: 'iPhone' | 'MacBook' | 'iPad' | 'Laptops' | 'AirPods' | 'Phone Accessories' | 'Laptop Accessories' | 'Power & Charging';
  department: 'Phones' | 'Laptops' | 'Accessories' | 'Audio' | 'Power & Charging';
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: 'NEW' | 'BEST SELLER' | 'SALE';
  shortSpecs: string;
  description: string;
  inStock: boolean;
  images: string[];
  colors?: { name: string; hex: string }[];
  storageOptions?: string[];
  specifications: Record<string, string>;
  whatsInTheBox: string[];
  warranty: string;
  isDeal?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedStorage?: string;
}

export interface FilterState {
  department: string | null;
  category: string | null;
  brands: string[];
  priceRange: string | null;
  minRating: number | null;
  availability: 'all' | 'inStock' | 'order';
  dealFilter: 'all' | 'sale' | 'clearance' | 'new';
  searchQuery: string;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
}

export interface LagosLocation {
  name: string;
  region: 'Island' | 'Mainland';
  fee: number;
  deliveryTime: string;
  popular: boolean;
}
