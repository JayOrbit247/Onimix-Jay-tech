import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { ShoppingLayout } from './components/ShoppingLayout';
import { DealsOfWeek } from './components/DealsOfWeek';
import { NewArrivals } from './components/NewArrivals';
import { WhyShopSection } from './components/WhyShopSection';
import { LagosDeliverySection } from './components/LagosDeliverySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';

import { PRODUCTS } from './data/products';
import { Product, CartItem, FilterState } from './types';
import { ShoppingBag, Check } from 'lucide-react';
import { formatNaira } from './lib/format';

const INITIAL_FILTER_STATE: FilterState = {
  searchQuery: '',
  category: null,
  department: null,
  brands: [],
  priceRange: null,
  minRating: null,
  availability: 'all',
  dealFilter: 'all',
  sortBy: 'featured'
};

export default function App() {
  // Products catalog
  const [products] = useState<Product[]>(PRODUCTS);

  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('onimix_cart_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Selected delivery location
  const [selectedLocation, setSelectedLocation] = useState<string>(() => {
    try {
      return localStorage.getItem('onimix_delivery_loc') || 'Ikeja';
    } catch {
      return 'Ikeja';
    }
  });

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('onimix_cart_items', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  // Save delivery location
  useEffect(() => {
    try {
      localStorage.setItem('onimix_delivery_loc', selectedLocation);
    } catch (e) {
      console.error('Failed to save location', e);
    }
  }, [selectedLocation]);

  // Filters State
  const [filterState, setFilterState] = useState<FilterState>(INITIAL_FILTER_STATE);

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<{ title: string; subtitle: string } | null>(null);

  // Loading screen / logo splash
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (title: string, subtitle: string) => {
    setToastMessage({ title, subtitle });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Add To Cart Handler
  const handleAddToCart = (product: Product, quantity = 1, color?: string, storage?: string) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && 
                item.selectedColor === color && 
                item.selectedStorage === storage
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        return [...prev, { product, quantity, selectedColor: color, selectedStorage: storage }];
      }
    });

    showToast('Added to Cart', `${product.name} (${formatNaira(product.price * quantity)})`);
  };

  // Cart item controls
  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems(prev => {
      const next = [...prev];
      next[index].quantity = newQty;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filter updates
  const handleUpdateFilter = (updates: Partial<FilterState>) => {
    setFilterState(prev => ({ ...prev, ...updates }));
    
    // Smooth scroll down to shopping grid if filter applied
    if (updates.category || updates.department || updates.brands || updates.priceRange) {
      const section = document.getElementById('shopping-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleResetFilters = () => {
    setFilterState(INITIAL_FILTER_STATE);
  };

  const handleSelectCategoryFromNav = (cat: string | null) => {
    if (!cat) {
      handleResetFilters();
    } else {
      setFilterState({
        ...INITIAL_FILTER_STATE,
        category: cat
      });
    }

    const section = document.getElementById('shopping-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearchSubmit = (query: string) => {
    setFilterState(prev => ({
      ...prev,
      searchQuery: query
    }));
    const section = document.getElementById('shopping-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewAllDeals = () => {
    setFilterState({
      ...INITIAL_FILTER_STATE,
      dealFilter: 'sale'
    });
    const section = document.getElementById('shopping-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewAllNew = () => {
    setFilterState({
      ...INITIAL_FILTER_STATE,
      dealFilter: 'new'
    });
    const section = document.getElementById('shopping-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-900 font-sans flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Loading Screen / Logo Splash */}
      {showSplash && (
        <div 
          id="loading-logo-splash"
          onClick={() => setShowSplash(false)}
          className="fixed inset-0 z-50 bg-[#0B1120] flex flex-col items-center justify-center p-4 transition-opacity duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center max-w-xs text-center animate-pulse">
            <img 
              src="/logo.png" 
              alt="Onimix jay TECH LAGOS" 
              className="h-24 sm:h-28 w-auto object-contain mb-4 drop-shadow-2xl"
            />
            <div className="w-36 h-1 bg-slate-800 rounded-full overflow-hidden mt-2">
              <div className="w-full h-full bg-blue-500 rounded-full animate-pulse" />
            </div>
            <p className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-4">
              Premium Technology. Delivered.
            </p>
          </div>
        </div>
      )}

      {/* 1. Multi-Level Global Header */}
      <Header
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={handleSelectCategoryFromNav}
        selectedCategory={filterState.category}
        onSearch={handleSearchSubmit}
        onOpenDeals={handleViewAllDeals}
        onScrollToDelivery={() => scrollToSection('lagos-delivery-section')}
        onScrollToAbout={() => scrollToSection('about-section')}
        onScrollToContact={() => scrollToSection('contact-section')}
      />

      {/* Main Content Area */}
      <div className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onShopNow={() => scrollToSection('shopping-section')}
          onExploreCategories={() => scrollToSection('categories-section')}
        />

        {/* 3. Category Section */}
        <CategorySection
          selectedCategory={filterState.category}
          onSelectCategory={handleSelectCategoryFromNav}
        />

        {/* 4. Deals of the Week Section */}
        <DealsOfWeek
          products={products}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onViewDetails={(p) => setSelectedProduct(p)}
          onViewAllDeals={handleViewAllDeals}
        />

        {/* 5. Main Shopping Layout: Left Sidebar + Product Grid (Amazon Structure Inspiration) */}
        <ShoppingLayout
          products={products}
          filterState={filterState}
          onUpdateFilter={handleUpdateFilter}
          onResetFilters={handleResetFilters}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onViewDetails={(p) => setSelectedProduct(p)}
        />

        {/* 6. New Arrivals Section */}
        <NewArrivals
          products={products}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onViewDetails={(p) => setSelectedProduct(p)}
          onViewAllNew={handleViewAllNew}
        />

        {/* 7. Why Shop Onimix jay Tech & Trust Section */}
        <WhyShopSection />

        {/* 8. Tech Delivered Across Lagos Section */}
        <LagosDeliverySection />

        {/* 9. Technology, Without The Hassle (About Section) */}
        <AboutSection />

        {/* 10. Need Help? Contact Section */}
        <ContactSection onShopNow={() => scrollToSection('shopping-section')} />
      </div>

      {/* 11. Comprehensive Dark Navy Footer */}
      <Footer
        onSelectCategory={handleSelectCategoryFromNav}
        onOpenDeliveryInfo={() => scrollToSection('lagos-delivery-section')}
        onScrollToAbout={() => scrollToSection('about-section')}
        onScrollToContact={() => scrollToSection('contact-section')}
        onOpenDeals={handleViewAllDeals}
      />

      {/* 12. Mobile Bottom Navigation Bar (Sticky with Phone Direct Call) */}
      <MobileBottomNav
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCategories={() => scrollToSection('categories-section')}
        onOpenDeals={handleViewAllDeals}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, qty, color, storage) => {
          handleAddToCart(p, qty, color, storage);
          setSelectedProduct(null);
          setIsCartOpen(true);
        }}
        onSelectRelated={(p) => setSelectedProduct(p)}
        allProducts={products}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
      />

      {/* Checkout Modal with Phone Confirmation Flow */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        selectedLocation={selectedLocation}
        onOrderCompleted={(orderRef) => {
          // Keep items or clear upon completion
          handleClearCart();
        }}
      />

      {/* Notification Toast */}
      {toastMessage && (
        <div 
          id="toast-notification"
          className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 bg-slate-900 text-white p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 border border-slate-700"
        >
          <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">{toastMessage.title}</p>
            <p className="text-[11px] text-slate-300 line-clamp-1">{toastMessage.subtitle}</p>
          </div>
          <button
            onClick={() => {
              setToastMessage(null);
              setIsCartOpen(true);
            }}
            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>View</span>
          </button>
        </div>
      )}

    </div>
  );
}
