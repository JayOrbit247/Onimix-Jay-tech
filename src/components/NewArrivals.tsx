import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface NewArrivalsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onViewAllNew: () => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  products,
  onAddToCart,
  onViewDetails,
  onViewAllNew
}) => {
  // Products that are new arrivals or have NEW badge
  const newProducts = products
    .filter(p => p.isNewArrival || p.badge === 'NEW')
    .slice(0, 6);

  return (
    <section id="new-arrivals" className="py-12 bg-[#F5F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Fresh From Port
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              NEW ARRIVALS
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              The latest generation devices landed this week at our central Lagos facility.
            </p>
          </div>

          <button
            onClick={onViewAllNew}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors self-start sm:self-auto"
          >
            <span>View All New Models</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 to 6 items grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {newProducts.map(product => (
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
