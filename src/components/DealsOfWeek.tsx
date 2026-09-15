import React from 'react';
import { Tag, Clock, ArrowRight, Flame } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface DealsOfWeekProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onViewAllDeals: () => void;
}

export const DealsOfWeek: React.FC<DealsOfWeekProps> = ({
  products,
  onAddToCart,
  onViewDetails,
  onViewAllDeals
}) => {
  // Filter products that have isDeal flag or SALE badge
  const dealProducts = products
    .filter(p => p.isDeal || p.badge === 'SALE' || (p.oldPrice && p.oldPrice > p.price))
    .slice(0, 4);

  return (
    <section id="deals-of-the-week" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Countdown timer simulation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5 fill-red-500 text-red-500" />
              Limited-Time Lagos Promotions
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              DEALS OF THE WEEK
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Save big on iPhones, MacBook Air M4, NovaPods Pro ANC, and GaN fast chargers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-red-600" />
              <span>Offer refreshes in: <strong className="text-slate-900">48 hrs</strong></span>
            </div>
            <button
              onClick={onViewAllDeals}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
            >
              <span>See All Deals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {dealProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
