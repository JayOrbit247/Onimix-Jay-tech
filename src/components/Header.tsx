import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Sparkles,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/format';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectCategory: (category: string | null) => void;
  onSelectDepartment: (dept: string | null) => void;
  onSearch: (query: string, category?: string) => void;
  onOpenDeliveryInfo: () => void;
  onOpenDeals: () => void;
  onOpenNewArrivals: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onSelectCategory,
  onSelectDepartment,
  onSearch,
  onOpenDeliveryInfo,
  onOpenDeals,
  onOpenNewArrivals
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSearchCat, setSelectedSearchCat] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput, selectedSearchCat === 'All' ? undefined : selectedSearchCat);
  };

  const navCategories = [
    { label: 'All Categories', action: () => onSelectCategory(null) },
    { label: 'iPhone', action: () => onSelectCategory('iPhone') },
    { label: 'iPad', action: () => onSelectCategory('iPad') },
    { label: 'MacBook', action: () => onSelectCategory('MacBook') },
    { label: 'Laptops', action: () => onSelectCategory('Laptops') },
    { label: 'Accessories', action: () => onSelectDepartment('Accessories') },
    { label: 'AirPods', action: () => onSelectCategory('AirPods') },
    { label: 'Power & Charging', action: () => onSelectCategory('Power & Charging') },
    { label: 'Deals', action: onOpenDeals, isHighlight: true },
    { label: 'New Arrivals', action: onOpenNewArrivals, isHighlight: true }
  ];

  return (
    <header className="sticky top-0 z-40 shadow-lg font-sans">
      {/* Top Banner: Immediate Phone Ordering Bar */}
      <div className="bg-[#0b1120] text-gray-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white tracking-wider uppercase">
              Lagos Priority
            </span>
            <span className="hidden sm:inline text-slate-300">
              Same-day dispatch across Ikeja, Lekki, VI, Yaba & all Lagos LGAs
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1 text-slate-300 hidden md:flex">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Sales desk open 8am - 9pm WAT</span>
            </div>
            <a 
              href={PHONE_TEL}
              id="header-top-call-link"
              className="flex items-center gap-1.5 text-blue-400 hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-green-400 animate-pulse" />
              <span>Order Line: <span className="text-white font-bold">{PHONE_DISPLAY}</span></span>
            </a>
          </div>
        </div>
      </div>

      {/* TOP HEADER - Dark Navy (#0F172A) */}
      <div className="bg-[#0F172A] text-white px-3 sm:px-6 py-3 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-6">
          
          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Left: Brand Logo & Lagos Location */}
          <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onSelectCategory(null); }}
              id="header-logo-link"
              className="flex items-center group cursor-pointer py-0.5"
            >
              <img 
                src="/logo.png" 
                alt="Onimix jay TECH LAGOS" 
                className="h-10 sm:h-12 w-auto max-w-[200px] object-contain transition-transform group-hover:scale-102"
              />
            </a>

            {/* Delivering across Lagos */}
            <button 
              id="header-delivery-badge-btn"
              onClick={onOpenDeliveryInfo}
              className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-slate-700/80 hover:border-blue-500 bg-slate-800/60 hover:bg-slate-800 transition-all text-left group"
            >
              <MapPin className="w-4 h-4 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
              <div className="leading-tight">
                <p className="text-[10px] text-slate-400 font-medium">Delivering across</p>
                <p className="text-xs font-bold text-slate-100 flex items-center gap-1">
                  Lagos State <ChevronDown className="w-3 h-3 text-slate-400" />
                </p>
              </div>
            </button>
          </div>

          {/* CENTER: Large Search Bar with Category Dropdown */}
          <form 
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-2xl mx-2 relative items-center"
          >
            <div className="relative flex w-full rounded-lg overflow-hidden shadow-sm border border-slate-600 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
              <select
                id="search-category-select"
                value={selectedSearchCat}
                onChange={(e) => setSelectedSearchCat(e.target.value)}
                className="bg-slate-800 text-xs text-slate-200 border-r border-slate-700 px-3 py-2.5 outline-none hover:bg-slate-700 cursor-pointer appearance-none pr-7"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1em'
                }}
              >
                <option value="All">All Categories</option>
                <option value="iPhone">iPhones</option>
                <option value="MacBook">MacBooks</option>
                <option value="Laptops">Laptops</option>
                <option value="iPad">iPads</option>
                <option value="AirPods">AirPods</option>
                <option value="Power & Charging">Power & Charging</option>
                <option value="Accessories">Accessories</option>
              </select>

              <input
                id="header-search-input"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search iPhones, MacBooks, laptops, accessories..."
                className="w-full bg-white text-slate-900 placeholder:text-slate-400 px-4 py-2.5 text-sm outline-none"
              />

              <button
                type="submit"
                id="header-search-submit-btn"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 flex items-center justify-center transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* RIGHT: User, Orders, Cart, Prominent Phone */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Mobile Search Toggle */}
            <button
              id="mobile-search-toggle"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="p-2 md:hidden text-slate-300 hover:text-white"
              aria-label="Toggle mobile search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account / Hello Sign in */}
            <button 
              id="header-account-btn"
              onClick={() => setShowAccountModal(!showAccountModal)}
              className="hidden lg:flex flex-col text-left px-2 py-1 rounded hover:bg-slate-800 transition-colors"
            >
              <span className="text-[10px] text-slate-400">Hello, Sign in</span>
              <span className="text-xs font-bold text-white flex items-center gap-0.5">
                Account <ChevronDown className="w-3 h-3 text-slate-400" />
              </span>
            </button>

            {/* Orders */}
            <button 
              id="header-orders-btn"
              onClick={() => setShowAccountModal(true)}
              className="hidden xl:flex flex-col text-left px-2 py-1 rounded hover:bg-slate-800 transition-colors"
            >
              <span className="text-[10px] text-slate-400">Returns &</span>
              <span className="text-xs font-bold text-white">Orders</span>
            </button>

            {/* Cart Icon & Count */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all text-white relative group"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-slate-200 group-hover:text-blue-400 transition-colors" />
                {cartCount > 0 && (
                  <span 
                    id="header-cart-badge"
                    className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center animate-bounce"
                  >
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-bold">Cart</span>
            </button>

            {/* Prominent Phone ordering button on Header */}
            <a
              href={PHONE_TEL}
              id="header-primary-phone-cta"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-xs sm:text-sm shadow-md hover:shadow-blue-500/20 transition-all transform active:scale-95"
            >
              <Phone className="w-4 h-4 text-green-300" />
              <div className="text-left leading-tight hidden xs:block">
                <span className="block text-[9px] uppercase font-extrabold tracking-wider text-blue-100">
                  Call To Order
                </span>
                <span className="font-extrabold text-white text-xs sm:text-sm">
                  {PHONE_DISPLAY}
                </span>
              </div>
              <span className="xs:hidden text-xs font-bold">Call</span>
            </a>

          </div>
        </div>

        {/* Mobile Search Bar Expandable */}
        {mobileSearchOpen && (
          <form onSubmit={handleSearchSubmit} className="mt-3 md:hidden">
            <div className="flex rounded-lg overflow-hidden border border-slate-600">
              <input
                id="mobile-search-input"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search iPhones, laptops, accessories..."
                className="w-full bg-white text-slate-900 px-3 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 flex items-center justify-center"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>

      {/* SECOND NAVIGATION BAR - Slightly lighter dark navy */}
      <div className="bg-[#111827] text-slate-200 text-xs sm:text-sm border-b border-slate-800/80 px-3 sm:px-6 py-2 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 whitespace-nowrap">
          
          <div className="flex items-center gap-1 sm:gap-2">
            {navCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={cat.action}
                id={`nav-link-${cat.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-2.5 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                  cat.isHighlight
                    ? 'text-amber-400 hover:text-amber-300 hover:bg-slate-800/80 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label === 'Deals' && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />}
                {cat.label === 'New Arrivals' && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Call to Order on Second Nav Right */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[11px] text-slate-400">Direct Sales Desk:</span>
            <a
              href={PHONE_TEL}
              id="second-nav-call-to-order-btn"
              className="bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white px-3 py-1 rounded border border-blue-500/40 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-green-400" />
              CALL TO ORDER
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex">
          <div className="w-4/5 max-w-sm bg-[#0F172A] text-white h-full p-5 overflow-y-auto flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <a 
                  href="#"
                  onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onSelectCategory(null); }}
                  className="flex items-center"
                >
                  <img 
                    src="/logo.png" 
                    alt="Onimix jay TECH LAGOS" 
                    className="h-10 w-auto max-w-[170px] object-contain"
                  />
                </a>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Call to order priority block */}
              <div className="p-3 bg-blue-900/30 border border-blue-600/40 rounded-xl mb-5">
                <p className="text-[11px] text-blue-300 font-semibold mb-1">PHONE ORDERING (24/7)</p>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-2 text-white font-extrabold text-base bg-blue-600 hover:bg-blue-700 py-2 px-3 rounded-lg justify-center transition-colors"
                >
                  <Phone className="w-4 h-4 text-green-300" />
                  CALL {PHONE_DISPLAY}
                </a>
              </div>

              {/* Navigation links */}
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Departments</p>
              <div className="space-y-1">
                {navCategories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      cat.action();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white flex items-center justify-between transition-colors"
                  >
                    <span>{cat.label}</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 text-slate-500" />
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    onOpenDeliveryInfo();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Delivery Locations in Lagos</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                100% Authentic Lagos Stock
              </p>
              <p className="text-[11px] text-slate-500">
                Tagline: "Premium Technology. Delivered."
              </p>
            </div>
          </div>

          <div 
            className="flex-1" 
            onClick={() => setMobileMenuOpen(false)} 
          />
        </div>
      )}

      {/* Account Info Modal */}
      {showAccountModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-slate-900 shadow-2xl relative">
            <button
              onClick={() => setShowAccountModal(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Direct Client Services</h3>
                <p className="text-xs text-slate-500">Onimix jay Tech Lagos</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 mb-4">
              At Onimix jay Tech Lagos, we streamline your shopping through direct personal concierge assistance and verified phone dispatch.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4 space-y-2 text-sm">
              <p className="font-semibold text-slate-800">Track an existing order or request invoice:</p>
              <p className="text-xs text-slate-600">Please quote your Order Code or call our priority dispatch desk directly.</p>
              <a
                href={PHONE_TEL}
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg text-sm transition-colors mt-2"
              >
                Call Customer Care: {PHONE_DISPLAY}
              </a>
            </div>

            <button
              onClick={() => setShowAccountModal(false)}
              className="w-full py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
