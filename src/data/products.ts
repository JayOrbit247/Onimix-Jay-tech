import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // IPHONES
  {
    id: 'nova-iphone-17-pro-max',
    name: 'Nova iPhone 17 Pro Max 256GB',
    brand: 'Apple',
    category: 'iPhone',
    department: 'Phones',
    price: 2950000,
    oldPrice: 3150000,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'BEST SELLER',
    shortSpecs: 'Titanium finish • 256GB • A19 Pro Bionic • 5G Super Retina XDR',
    description: 'The pinnacle of mobile engineering. Built with grade 5 aerospace titanium, cutting-edge camera sensors with 10x optical zoom capabilities, and an expansive Always-On ProMotion display.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#8E8D8A' },
      { name: 'Desert Titanium', hex: '#C2A88F' },
      { name: 'Black Titanium', hex: '#2E2F32' },
      { name: 'White Titanium', hex: '#F0EEE9' }
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    specifications: {
      'Processor': 'A19 Pro Chip with 6-core GPU',
      'Display': '6.9-inch Super Retina XDR OLED (120Hz)',
      'Camera': '48MP Triple Fusion System with 5x Telephoto',
      'Battery': 'Up to 33 hours video playback',
      'Port': 'USB-C (USB 3 speeds up to 10Gb/s)',
      'Connectivity': '5G Sub-6GHz, Wi-Fi 7, Bluetooth 5.4'
    },
    whatsInTheBox: [
      'Nova iPhone 17 Pro Max with iOS',
      'Braided USB-C Charge Cable (1m)',
      'Documentation & SIM Ejector Tool'
    ],
    warranty: '1-Year Official Manufacturer Warranty with Lagos replacement support',
    isDeal: false,
    isNewArrival: true
  },
  {
    id: 'nova-iphone-17-pro',
    name: 'Nova iPhone 17 Pro 256GB',
    brand: 'Apple',
    category: 'iPhone',
    department: 'Phones',
    price: 2650000,
    rating: 4.8,
    reviewsCount: 98,
    badge: 'NEW',
    shortSpecs: 'Grade 5 Titanium • 256GB • ProMotion 120Hz • A19 Pro',
    description: 'Pocketable pro performance with a refined 6.3-inch display, pro camera array, customizable Action Button, and battery performance built for busy Lagos business days.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#8E8D8A' },
      { name: 'Desert Titanium', hex: '#C2A88F' },
      { name: 'Dark Navy', hex: '#1E293B' }
    ],
    storageOptions: ['128GB', '256GB', '512GB'],
    specifications: {
      'Processor': 'A19 Pro Chip',
      'Display': '6.3-inch Super Retina XDR (120Hz ProMotion)',
      'Camera': '48MP Main, 48MP Ultra Wide, 12MP 5x Telephoto',
      'Battery': 'Up to 28 hours video playback'
    },
    whatsInTheBox: [
      'Nova iPhone 17 Pro',
      'USB-C Charge Cable',
      'Documentation'
    ],
    warranty: '1-Year Official Warranty with Lagos fast-swap dispatch',
    isNewArrival: true
  },
  {
    id: 'nova-iphone-17',
    name: 'Nova iPhone 17 128GB',
    brand: 'Apple',
    category: 'iPhone',
    department: 'Phones',
    price: 1950000,
    rating: 4.7,
    reviewsCount: 64,
    badge: 'NEW',
    shortSpecs: 'Dynamic Island • 128GB • A18 Bionic • 48MP Dual Fusion',
    description: 'Vibrant color-infused back glass with aerospace-grade aluminum edges. Supercharged camera intelligence for stunning portraits and fast performance.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Midnight Black', hex: '#111827' },
      { name: 'Ultramarine Blue', hex: '#2563EB' },
      { name: 'Starlight White', hex: '#F8FAFC' },
      { name: 'Teal Green', hex: '#0D9488' }
    ],
    storageOptions: ['128GB', '256GB'],
    specifications: {
      'Processor': 'A18 Bionic Chip',
      'Display': '6.1-inch Super Retina XDR OLED',
      'Camera': '48MP Main + 12MP Ultra Wide with 2x Telephoto',
      'Battery': 'All-day battery life (up to 24 hrs video)'
    },
    whatsInTheBox: ['Nova iPhone 17', 'USB-C Cable', 'Quick Start Guide'],
    warranty: '1-Year Limited Warranty',
    isNewArrival: true
  },
  {
    id: 'nova-iphone-16-pro-max',
    name: 'Nova iPhone 16 Pro Max 256GB',
    brand: 'Apple',
    category: 'iPhone',
    department: 'Phones',
    price: 2450000,
    oldPrice: 2700000,
    rating: 4.9,
    reviewsCount: 215,
    badge: 'SALE',
    shortSpecs: 'A18 Pro • 256GB • 5x Optical Zoom • Titanium Build',
    description: 'Exceptional flagship performance at promotional discounted pricing. Equipped with Camera Control touch sensor, titanium body, and stellar battery efficiency.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Black Titanium', hex: '#1E2022' },
      { name: 'Natural Titanium', hex: '#8E8D8A' }
    ],
    storageOptions: ['256GB', '512GB'],
    specifications: {
      'Processor': 'A18 Pro Chip',
      'Display': '6.9-inch OLED 120Hz ProMotion',
      'Camera': '48MP Main, 48MP Ultra Wide, 12MP 5x Telephoto'
    },
    whatsInTheBox: ['iPhone 16 Pro Max', 'USB-C Cable', 'Warranty Card'],
    warranty: '12 Months Warranty',
    isDeal: true
  },
  {
    id: 'nova-iphone-16',
    name: 'Nova iPhone 16 128GB',
    brand: 'Apple',
    category: 'iPhone',
    department: 'Phones',
    price: 1750000,
    oldPrice: 1950000,
    rating: 4.8,
    reviewsCount: 168,
    badge: 'SALE',
    shortSpecs: 'Action Button • 128GB • 48MP Fusion • USB-C',
    description: 'Remarkable everyday performance with high durability, industry-leading Ceramic Shield glass front, and all-day battery reliability.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#0F172A' },
      { name: 'Blue', hex: '#3B82F6' },
      { name: 'Pink', hex: '#F472B6' }
    ],
    storageOptions: ['128GB', '256GB'],
    specifications: {
      'Processor': 'A18 Chip',
      'Display': '6.1-inch Super Retina XDR OLED',
      'Camera': '48MP Fusion Camera'
    },
    whatsInTheBox: ['Nova iPhone 16', 'USB-C Cable', 'Documents'],
    warranty: '12 Months Warranty',
    isDeal: true
  },

  // MACBOOKS
  {
    id: 'macbook-air-m4-13',
    name: 'MacBook Air M4 13-inch',
    brand: 'Apple',
    category: 'MacBook',
    department: 'Laptops',
    price: 2150000,
    oldPrice: 2350000,
    rating: 4.9,
    reviewsCount: 110,
    badge: 'SALE',
    shortSpecs: 'M4 chip 8-core CPU • 16GB RAM • 256GB SSD • Liquid Retina',
    description: 'Impossibly thin and wicked fast. The M4 MacBook Air effortlessly sails through work and play, with up to 18 hours of battery life and a silent fanless architecture.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Midnight', hex: '#1E293B' },
      { name: 'Space Gray', hex: '#4B5563' },
      { name: 'Silver', hex: '#E2E8F0' },
      { name: 'Starlight', hex: '#F3E8D6' }
    ],
    storageOptions: ['256GB SSD', '512GB SSD'],
    specifications: {
      'Processor': 'Apple M4 chip (8-core CPU, 8-core GPU)',
      'Memory': '16GB Unified Memory',
      'Storage': '256GB High-Speed NVMe SSD',
      'Display': '13.6-inch Liquid Retina Display with True Tone',
      'Ports': 'MagSafe 3, 2x Thunderbolt 4 / USB-C, Headphone Jack',
      'Battery': 'Up to 18 hours wireless web'
    },
    whatsInTheBox: [
      'MacBook Air M4 13-inch',
      '30W USB-C Power Adapter',
      'USB-C to MagSafe 3 Cable (2m)'
    ],
    warranty: '1-Year Apple Manufacturer Warranty with Lagos verified support',
    isDeal: true
  },
  {
    id: 'macbook-air-m4-15',
    name: 'MacBook Air M4 15-inch',
    brand: 'Apple',
    category: 'MacBook',
    department: 'Laptops',
    price: 2550000,
    rating: 4.8,
    reviewsCount: 84,
    shortSpecs: '15.3-inch Liquid Retina • M4 Chip 10-core GPU • 16GB • 512GB',
    description: 'More room to multitask. The 15-inch MacBook Air gives you a breathtaking, spacious display and six-speaker sound system with Spatial Audio.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Midnight', hex: '#1E293B' },
      { name: 'Starlight', hex: '#F3E8D6' },
      { name: 'Space Gray', hex: '#4B5563' }
    ],
    storageOptions: ['512GB SSD', '1TB SSD'],
    specifications: {
      'Processor': 'Apple M4 chip (8-core CPU, 10-core GPU)',
      'Memory': '16GB Unified Memory',
      'Display': '15.3-inch Liquid Retina display with 500 nits brightness',
      'Audio': 'Six-speaker sound system with force-cancelling woofers'
    },
    whatsInTheBox: [
      'MacBook Air 15-inch',
      '35W Dual USB-C Port Compact Power Adapter',
      'USB-C to MagSafe 3 Cable'
    ],
    warranty: '1-Year Official Warranty'
  },
  {
    id: 'macbook-pro-m4-14',
    name: 'MacBook Pro M4 14-inch',
    brand: 'Apple',
    category: 'MacBook',
    department: 'Laptops',
    price: 3400000,
    oldPrice: 3650000,
    rating: 5.0,
    reviewsCount: 156,
    badge: 'BEST SELLER',
    shortSpecs: 'M4 Pro 12-Core • 24GB Unified RAM • 512GB SSD • Liquid Retina XDR',
    description: 'Pro performance unleashed for creative directors, developers, and power executives. Features the Liquid Retina XDR screen with up to 1600 nits peak brightness and comprehensive I/O ports.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Space Black', hex: '#1C1D1F' },
      { name: 'Silver', hex: '#E2E8F0' }
    ],
    storageOptions: ['512GB SSD', '1TB SSD', '2TB SSD'],
    specifications: {
      'Processor': 'Apple M4 Pro chip (12-core CPU, 18-core GPU)',
      'Memory': '24GB Unified Memory',
      'Display': '14.2-inch Liquid Retina XDR (120Hz ProMotion)',
      'Ports': '3x Thunderbolt 4, HDMI, SDXC card slot, MagSafe 3',
      'Battery': 'Up to 22 hours video streaming'
    },
    whatsInTheBox: [
      'MacBook Pro 14-inch M4 Pro',
      '70W or 96W USB-C Power Adapter',
      'USB-C to MagSafe 3 Cable (2m)'
    ],
    warranty: '1-Year Apple Official Warranty with Lagos concierge priority',
    isDeal: true
  },

  // WINDOWS LAPTOPS
  {
    id: 'dell-xps-14',
    name: 'Dell XPS 14',
    brand: 'Dell',
    category: 'Laptops',
    department: 'Laptops',
    price: 2850000,
    rating: 4.8,
    reviewsCount: 52,
    badge: 'NEW',
    shortSpecs: 'Intel Core Ultra 7 • 32GB RAM • 1TB SSD • 3.2K OLED Touch',
    description: 'Precision-machined CNC aluminum paired with Gorilla Glass 3. Includes an edge-to-edge glass touchpad with haptic feedback, capacitive touch function keys, and high-performance Intel AI boost.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Platinum Silver', hex: '#D1D5DB' },
      { name: 'Graphite', hex: '#374151' }
    ],
    storageOptions: ['1TB SSD', '2TB SSD'],
    specifications: {
      'Processor': 'Intel Core Ultra 7 155H (16-Core, up to 4.8GHz)',
      'Graphics': 'NVIDIA GeForce RTX 4050 6GB GDDR6',
      'Memory': '32GB LPDDR5X Dual Channel',
      'Display': '14.5-inch 3.2K (3200 x 2000) OLED Touch InfinityEdge',
      'Battery': '69.5Whr with 100W Type-C Fast Charger'
    },
    whatsInTheBox: ['Dell XPS 14 Laptop', '100W USB-C Adapter', 'USB-C to USB-A/HDMI Dongle'],
    warranty: '2-Year Dell ProSupport with onsite repair coverage in Lagos',
    isNewArrival: true
  },
  {
    id: 'hp-spectre-x360',
    name: 'HP Spectre x360',
    brand: 'HP',
    category: 'Laptops',
    department: 'Laptops',
    price: 2650000,
    oldPrice: 2850000,
    rating: 4.7,
    reviewsCount: 43,
    badge: 'SALE',
    shortSpecs: '2-in-1 Convertible • Intel Core Ultra 7 • 16GB • 1TB • 2.8K OLED',
    description: 'Flawless gem-cut convertible craftsmanship. Switch smoothly between laptop, tent, tablet, and presentation modes. Bundled with HP Rechargeable Tilt Pen for notes and design.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Nightfall Black', hex: '#18181B' },
      { name: 'Slate Blue', hex: '#1E3A8A' }
    ],
    specifications: {
      'Processor': 'Intel Core Ultra 7 155H',
      'Display': '14-inch 2.8K (2880 x 1800) OLED 120Hz Touch',
      'Memory': '16GB LPDDR5x',
      'Storage': '1TB PCIe Gen4 NVMe'
    },
    whatsInTheBox: ['HP Spectre x360', 'HP Tilt Stylus Pen', '65W USB-C Adapter', 'Leather Sleeve'],
    warranty: '1-Year HP International Warranty',
    isDeal: true
  },
  {
    id: 'lenovo-yoga-pro',
    name: 'Lenovo Yoga Pro',
    brand: 'Lenovo',
    category: 'Laptops',
    department: 'Laptops',
    price: 2350000,
    rating: 4.7,
    reviewsCount: 39,
    shortSpecs: 'Intel Core Ultra 7 • 16GB RAM • 1TB SSD • 3K PureSight Pro 120Hz',
    description: 'Designed specifically for ambitious content creators. PureSight Pro 3K display with factory color calibration, Dolby Atmos quad-speaker system, and premium aluminum chassis.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Tidal Teal', hex: '#115E59' },
      { name: 'Luna Grey', hex: '#64748B' }
    ],
    specifications: {
      'Processor': 'Intel Core Ultra 7 155H',
      'Display': '14.5-inch 3K (3072 x 1920) 120Hz IPS 100% DCI-P3',
      'Storage': '1TB M.2 NVMe SSD',
      'Audio': '4x Stereo Speakers with Smart Amp'
    },
    whatsInTheBox: ['Lenovo Yoga Pro', '100W GaN Fast Charger', 'User Manual'],
    warranty: '1-Year Lenovo Premium Care'
  },
  {
    id: 'asus-zenbook-14',
    name: 'ASUS Zenbook 14',
    brand: 'ASUS',
    category: 'Laptops',
    department: 'Laptops',
    price: 2200000,
    oldPrice: 2400000,
    rating: 4.8,
    reviewsCount: 67,
    badge: 'SALE',
    shortSpecs: 'Intel Core Ultra 7 • 16GB • 1TB • 3K 120Hz Lumina OLED • 1.2kg',
    description: 'Feather-light 1.2kg military-grade ultraportable laptop with breathtaking ASUS Lumina OLED display, Harman Kardon audio, and 75Wh battery delivering up to 15 hours of productivity.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Ponder Blue', hex: '#1E293B' },
      { name: 'Foggy Silver', hex: '#CBD5E1' }
    ],
    specifications: {
      'Processor': 'Intel Core Ultra 7 155H',
      'Display': '14.0-inch 3K OLED 16:10 120Hz 0.2ms',
      'Weight': '1.20 kg (2.65 lbs)',
      'Battery': '75WHrs, 4S1P, 4-cell Li-ion'
    },
    whatsInTheBox: ['ASUS Zenbook 14 OLED', '65W Type-C Adapter', 'Protective Sleeve'],
    warranty: '2-Year ASUS Global Warranty',
    isDeal: true
  },

  // IPADS & TABLETS
  {
    id: 'ipad-pro-m4-11',
    name: 'iPad Pro M4 11-inch 256GB',
    brand: 'Apple',
    category: 'iPad',
    department: 'Phones',
    price: 1850000,
    rating: 4.9,
    reviewsCount: 76,
    badge: 'BEST SELLER',
    shortSpecs: 'Ultra Retina XDR Tandem OLED • M4 Chip • 256GB • Wi-Fi 6E',
    description: 'The thinnest Apple product ever made. Tandem OLED technology produces jaw-dropping brightness, contrast, and color fidelity powered by the revolutionary M4 chip.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Space Black', hex: '#1C1D1F' },
      { name: 'Silver', hex: '#E2E8F0' }
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    specifications: {
      'Processor': 'Apple M4 Chip (9-core CPU, 10-core GPU)',
      'Display': '11-inch Ultra Retina XDR Tandem OLED (1600 nits peak)',
      'Thickness': '5.3 mm'
    },
    whatsInTheBox: ['iPad Pro 11-inch', 'USB-C Charge Cable', '20W USB-C Power Adapter'],
    warranty: '1-Year Official Warranty'
  },
  {
    id: 'ipad-air-m2-11',
    name: 'iPad Air 11-inch M2 128GB',
    brand: 'Apple',
    category: 'iPad',
    department: 'Phones',
    price: 1250000,
    rating: 4.8,
    reviewsCount: 54,
    shortSpecs: 'Apple M2 Chip • 128GB • Liquid Retina • Touch ID',
    description: 'Packed with endless versatility. Supercharged by the M2 chip with landscape front camera, USB-C fast charging, and full Apple Pencil Pro compatibility.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Space Gray', hex: '#4B5563' },
      { name: 'Starlight', hex: '#F3E8D6' },
      { name: 'Blue', hex: '#3B82F6' }
    ],
    storageOptions: ['128GB', '256GB'],
    specifications: {
      'Processor': 'Apple M2 Chip',
      'Display': '11-inch Liquid Retina display with P3 wide color',
      'Camera': '12MP Center Stage front camera'
    },
    whatsInTheBox: ['iPad Air', 'USB-C Charge Cable', '20W USB-C Adapter'],
    warranty: '1-Year Warranty'
  },

  // AUDIO & AIRPODS
  {
    id: 'novapods-pro',
    name: 'NovaPods Pro Active Noise Cancelling',
    brand: 'Apple',
    category: 'AirPods',
    department: 'Audio',
    price: 480000,
    oldPrice: 520000,
    rating: 4.9,
    reviewsCount: 189,
    badge: 'BEST SELLER',
    shortSpecs: 'Active Noise Cancellation • Transparency Mode • MagSafe USB-C',
    description: 'Engineered for pristine sound clarity. Up to 2x more Active Noise Cancellation, Adaptive Audio, Conversation Awareness, and up to 30 hours of total listening time with MagSafe USB-C case.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [{ name: 'Gloss White', hex: '#FFFFFF' }],
    specifications: {
      'Audio Tech': 'H2 headphone chip, custom high-excursion driver',
      'Battery': 'Up to 6 hours listening on single charge (30 hours total)',
      'Water Resistance': 'IP54 dust, sweat, and water resistant'
    },
    whatsInTheBox: [
      'NovaPods Pro Earbuds',
      'MagSafe Case (USB-C) with Speaker & Lanyard Loop',
      'Silicone Ear Tips (XS, S, M, L)',
      'Braided USB-C Charge Cable'
    ],
    warranty: '1-Year Official Warranty with instant Lagos checkup',
    isDeal: true
  },
  {
    id: 'airpods-max-space-black',
    name: 'AirPods Max High-Fidelity Headphones',
    brand: 'Apple',
    category: 'AirPods',
    department: 'Audio',
    price: 890000,
    rating: 4.8,
    reviewsCount: 71,
    badge: 'NEW',
    shortSpecs: 'High-Fidelity Audio • USB-C • Spatial Audio • Memory Foam Cups',
    description: 'The ultimate personal listening experience. An Apple-designed dynamic driver provides high-fidelity audio with industry-leading Active Noise Cancellation and breathable mesh canopy headband.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Space Black', hex: '#1C1D1F' },
      { name: 'Silver', hex: '#E2E8F0' },
      { name: 'Midnight', hex: '#1E293B' }
    ],
    specifications: {
      'Driver': '40mm Apple-designed dynamic driver',
      'ANC': '8 microphones for Active Noise Cancellation',
      'Battery': 'Up to 20 hours listening with ANC enabled'
    },
    whatsInTheBox: ['AirPods Max', 'Smart Case', 'USB-C Charge Cable'],
    warranty: '1-Year Warranty'
  },

  // POWER & CHARGING
  {
    id: 'usbc-fast-charger-35w',
    name: 'USB-C Fast Charger 35W Dual Port',
    brand: 'Anker',
    category: 'Power & Charging',
    department: 'Power & Charging',
    price: 850000 !== undefined ? 85000 : 85000,
    oldPrice: 105000,
    rating: 4.8,
    reviewsCount: 310,
    badge: 'SALE',
    shortSpecs: '35W Dual USB-C GaN • Compact Foldable • Fast Power Delivery',
    description: 'Ultra-compact GaN power brick capable of rapidly charging your iPhone to 50% in just 25 minutes, or powering both your phone and Apple Watch simultaneously.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Clean White', hex: '#FFFFFF' },
      { name: 'Matte Black', hex: '#18181B' }
    ],
    specifications: {
      'Total Output': '35W Max (PD 3.0 / PPS)',
      'Ports': '2x USB-C',
      'Technology': 'Gallium Nitride (GaN III)'
    },
    whatsInTheBox: ['35W Dual USB-C Fast Charger', 'Safety Booklet'],
    warranty: '18 Months Anker Hassle-Free Replacement',
    isDeal: true
  },
  {
    id: 'premium-magsafe-power-bank',
    name: 'Premium MagSafe Magnetic Power Bank 10,000mAh',
    brand: 'Anker',
    category: 'Power & Charging',
    department: 'Power & Charging',
    price: 165000,
    oldPrice: 190000,
    rating: 4.9,
    reviewsCount: 145,
    badge: 'SALE',
    shortSpecs: '10,000mAh • 15W Qi2 Fast Magnetic • Digital Smart Display',
    description: 'Snap on and charge wirelessly on the move. Features a built-in foldable kickstand, real-time battery percentage display, and bi-directional 30W USB-C wired pass-through.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Titanium Grey', hex: '#4B5563' },
      { name: 'Frost White', hex: '#F9FAFB' }
    ],
    specifications: {
      'Capacity': '10,000mAh (38.5Wh)',
      'Wireless Output': '15W Qi2 Certified',
      'Wired Output': '30W Max USB-C PD'
    },
    whatsInTheBox: ['MagSafe Power Bank', 'USB-C to USB-C Cable (0.6m)', 'Welcome Guide'],
    warranty: '18 Months Official Warranty',
    isDeal: true
  },
  {
    id: 'baseus-blade-100w',
    name: 'Baseus Blade 100W Ultra-Thin Laptop Power Bank',
    brand: 'Baseus',
    category: 'Power & Charging',
    department: 'Power & Charging',
    price: 140000,
    rating: 4.8,
    reviewsCount: 88,
    badge: 'NEW',
    shortSpecs: '20,000mAh • 100W PD Output • Ultra-Slim 18mm • Dual Type-C',
    description: 'The traveler’s essential high-capacity battery. Charges a 14-inch MacBook Pro or Dell XPS at full speed. Slips effortlessly into any briefcase alongside your laptop.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [{ name: 'Stealth Black', hex: '#111827' }],
    specifications: {
      'Capacity': '20,000mAh',
      'Output': '100W Max PD3.0/QC4+',
      'Ports': '2x USB-C + 2x USB-A'
    },
    whatsInTheBox: ['Baseus 100W Power Bank', '100W USB-C Cable (0.5m)', 'Pouch'],
    warranty: '12 Months Warranty'
  },
  {
    id: 'ugreen-100w-gan',
    name: 'UGREEN Nexode 100W 4-Port GaN Desktop Charger',
    brand: 'UGREEN',
    category: 'Power & Charging',
    department: 'Power & Charging',
    price: 115000,
    rating: 4.9,
    reviewsCount: 112,
    shortSpecs: '100W 4-in-1 Fast GaN • 3x USB-C + 1x USB-A • Multi-Device',
    description: 'Charge your laptop, tablet, phone, and watch from one single AC wall outlet. Intelligent power distribution protects battery health and optimizes charging speed.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: {
      'Max Power': '100W',
      'Ports': '3 USB-C, 1 USB-A'
    },
    whatsInTheBox: ['UGREEN 100W GaN Charger', 'User Manual'],
    warranty: '12 Months Warranty'
  },

  // ACCESSORIES & CABLES
  {
    id: 'braided-usbc-cable',
    name: 'Braided USB-C to USB-C High-Speed Cable (2m)',
    brand: 'Apple',
    category: 'Phone Accessories',
    department: 'Accessories',
    price: 35000,
    rating: 4.8,
    reviewsCount: 220,
    shortSpecs: '2-Meter Braided Design • 240W Fast Charge • 480Mbps Sync',
    description: 'Woven design that resists fraying and tangles. Supports charging up to 240 watts and fast data transfers between USB-C devices.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1588515724527-074a7a56616c?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [{ name: 'White', hex: '#FFFFFF' }],
    specifications: {
      'Length': '2 Meters (6.6 ft)',
      'Power Support': 'Up to 240W',
      'Jacket': 'Double-braided nylon'
    },
    whatsInTheBox: ['Braided USB-C Cable (2m)'],
    warranty: '1-Year Limited Warranty'
  },
  {
    id: 'premium-iphone-case',
    name: 'Premium MagSafe Silicone iPhone Case',
    brand: 'Apple',
    category: 'Phone Accessories',
    department: 'Accessories',
    price: 45000,
    rating: 4.7,
    reviewsCount: 165,
    badge: 'BEST SELLER',
    shortSpecs: 'Silky Soft-Touch Silicone • Built-In MagSafe • Microfiber Lining',
    description: 'Designed by Apple to complement and safeguard your iPhone. The silky soft-touch finish feels superb in hand, with internal microfiber cushioning against drops and scuffs.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Midnight', hex: '#1E293B' },
      { name: 'Denim Blue', hex: '#3B82F6' },
      { name: 'Plum Purple', hex: '#7E22CE' }
    ],
    specifications: {
      'Material': 'Medical-grade Liquid Silicone + Microfiber',
      'Compatibility': 'iPhone 16 / 17 series',
      'MagSafe': 'Integrated N52 neodymium magnets'
    },
    whatsInTheBox: ['Silicone Case with MagSafe'],
    warranty: '6 Months Warranty'
  },
  {
    id: 'tempered-glass-screen-protector',
    name: 'Tempered Glass Screen Protector 9H 2-Pack',
    brand: 'UGREEN',
    category: 'Phone Accessories',
    department: 'Accessories',
    price: 25000,
    rating: 4.8,
    reviewsCount: 380,
    shortSpecs: '9H Hardness • Edge-to-Edge • Easy Alignment Frame • Anti-Fingerprint',
    description: 'Crystal-clear 9H tempered glass that preserves original touchscreen responsiveness and Dynamic Island clarity while repelling smudges, scratches, and impacts.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: {
      'Hardness': '9H Diamond-grade Tempered Glass',
      'Thickness': '0.33mm ultra-thin',
      'Coating': 'Oleophobic & Hydrophobic'
    },
    whatsInTheBox: ['2x Tempered Glass Protectors', 'Auto-Alignment Tray', 'Cleaning Kits'],
    warranty: 'Instant replacement on delivery defect'
  },
  {
    id: 'laptop-usbc-hub',
    name: 'Laptop USB-C Hub 8-in-1 Aluminum Adapter',
    brand: 'UGREEN',
    category: 'Laptop Accessories',
    department: 'Accessories',
    price: 95000,
    oldPrice: 115000,
    rating: 4.9,
    reviewsCount: 140,
    badge: 'BEST SELLER',
    shortSpecs: '4K@60Hz HDMI • 100W PD Pass-through • Gigabit LAN • SD/TF Card',
    description: 'Transform a single USB-C port into a complete workstation: 4K 60Hz HDMI output, 100W Power Delivery pass-through, RJ45 Gigabit Ethernet, SD/microSD readers, and 3x USB 3.0 ports.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: {
      'Video Output': 'HDMI up to 4K @ 60Hz',
      'Power Delivery': '100W USB-C PD 3.0 Input',
      'Ethernet': '1000Mbps Gigabit RJ45',
      'Chassis': 'Anodized Space Gray Aluminum alloy'
    },
    whatsInTheBox: ['8-in-1 USB-C Hub', 'Velvet Travel Pouch', 'User Manual'],
    warranty: '18 Months Warranty',
    isDeal: true
  },
  {
    id: 'wireless-mechanical-keyboard',
    name: 'Wireless Mechanical Keyboard Low-Profile RGB',
    brand: 'ASUS',
    category: 'Laptop Accessories',
    department: 'Accessories',
    price: 175000,
    rating: 4.9,
    reviewsCount: 95,
    badge: 'NEW',
    shortSpecs: 'Tri-Mode Bluetooth/2.4G/USB-C • Gateron Low-Profile • Mac & Windows',
    description: 'Sleek CNC aluminum body with hot-swappable low-profile mechanical switches. Seamlessly switch between MacBook, Windows laptop, and iPad with dedicated hotkeys.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Dark Navy / Carbon', hex: '#0F172A' },
      { name: 'White / Silver', hex: '#E2E8F0' }
    ],
    specifications: {
      'Connectivity': 'Bluetooth 5.1 (3 devices), 2.4GHz USB Dongle, USB-C Wired',
      'Keycaps': 'Double-shot PBT low profile',
      'Battery': 'Up to 200 hours with backlighting off'
    },
    whatsInTheBox: [
      'Low-Profile Mechanical Keyboard',
      '2.4GHz USB Receiver',
      'USB-A to USB-C Braided Cable',
      'Mac & Windows Keycap Extractor'
    ],
    warranty: '1-Year Limited Warranty',
    isNewArrival: true
  },

  // SAMSUNG FLAGSHIP
  {
    id: 'samsung-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra 512GB',
    brand: 'Samsung',
    category: 'iPhone',
    department: 'Phones',
    price: 2400000,
    oldPrice: 2600000,
    rating: 4.8,
    reviewsCount: 88,
    badge: 'SALE',
    shortSpecs: 'Snapdragon 8 Elite • 512GB • 200MP Quad Camera • S-Pen Integrated',
    description: 'Titanium frame with anti-reflective Gorilla Armor 2 display. Integrated Bluetooth S-Pen stylus, advanced Galaxy AI tools, and 5000mAh battery.',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Titanium Black', hex: '#1E2022' },
      { name: 'Titanium Silver', hex: '#9CA3AF' }
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    specifications: {
      'Processor': 'Qualcomm Snapdragon 8 Elite for Galaxy',
      'Display': '6.8-inch Dynamic AMOLED 2X 120Hz Anti-Reflective',
      'Camera': '200MP Main + 50MP Periscope Telephoto 5x'
    },
    whatsInTheBox: ['Galaxy S25 Ultra', 'Integrated S Pen', 'USB-C Cable', 'SIM Tool'],
    warranty: '2-Year Official Samsung Nigeria Warranty',
    isDeal: true
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'iPhone',
    name: 'iPhone',
    count: '14 Models',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80',
    description: 'iPhone 17 Pro Max, 17 Pro, 16 series with Apple warranty'
  },
  {
    id: 'MacBook',
    name: 'MacBook',
    count: '8 Models',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
    description: 'MacBook Air M4 and MacBook Pro M4 workstation laptops'
  },
  {
    id: 'iPad',
    name: 'iPad',
    count: '6 Models',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80',
    description: 'iPad Pro M4 Tandem OLED and lightweight iPad Air M2'
  },
  {
    id: 'Laptops',
    name: 'Laptops',
    count: '12 Models',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80',
    description: 'Dell XPS, HP Spectre x360, Lenovo Yoga & ASUS Zenbook'
  },
  {
    id: 'AirPods',
    name: 'AirPods',
    count: '5 Models',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=80',
    description: 'NovaPods Pro ANC and high-fidelity AirPods Max'
  },
  {
    id: 'Phone Accessories',
    name: 'Phone Accessories',
    count: '24 Items',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80',
    description: 'MagSafe silicone cases, 9H tempered protectors & braided cords'
  },
  {
    id: 'Laptop Accessories',
    name: 'Laptop Accessories',
    count: '16 Items',
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&auto=format&fit=crop&q=80',
    description: 'Multi-port USB-C hubs, ergonomic stands & wireless keyboards'
  },
  {
    id: 'Power & Charging',
    name: 'Power & Charging',
    count: '18 Items',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80',
    description: '35W - 140W GaN fast chargers, magnetic packs & power banks'
  }
];
