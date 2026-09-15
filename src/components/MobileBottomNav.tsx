import React from 'react';
import { Home, Grid, Search, ShoppingBag, PhoneCall } from 'lucide-react';
import { PHONE_TEL, PHONE_DISPLAY } from '../lib/format';

interface MobileBottomNavProps {
  cartCount: number;
  onGoHome: () => void;
  onOpenCategories: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  onGoHome,
  onOpenCategories,
  onOpenSearch,
  onOpenCart
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A] border-t border-slate-800 px-2 py-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-5 items-center justify-items-center">
        
        {/* HOME */}
        <button
          id="mobile-nav-home"
          onClick={onGoHome}
          className="flex flex-col items-center justify-center text-slate-300 hover:text-blue-400 py-1 px-2 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">HOME</span>
        </button>

        {/* CATEGORIES */}
        <button
          id="mobile-nav-categories"
          onClick={onOpenCategories}
          className="flex flex-col items-center justify-center text-slate-300 hover:text-blue-400 py-1 px-2 transition-colors"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">CATEGORIES</span>
        </button>

        {/* SEARCH */}
        <button
          id="mobile-nav-search"
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center text-slate-300 hover:text-blue-400 py-1 px-2 transition-colors"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">SEARCH</span>
        </button>

        {/* CART */}
        <button
          id="mobile-nav-cart"
          onClick={onOpenCart}
          className="flex flex-col items-center justify-center text-slate-300 hover:text-blue-400 py-1 px-2 relative transition-colors"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium tracking-tight mt-0.5">CART</span>
        </button>

        {/* CALL - Highlighted button calling +234 810 158 1209 */}
        <a
          id="mobile-nav-call-direct"
          href={PHONE_TEL}
          className="flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-1 px-2.5 rounded-lg font-bold shadow-md active:scale-95 transition-all"
        >
          <PhoneCall className="w-5 h-5 text-white animate-pulse" />
          <span className="text-[10px] font-extrabold tracking-tight mt-0.5">CALL</span>
        </a>

      </div>
    </div>
  );
};
