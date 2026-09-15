import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';

interface CategorySectionProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
  selectedCategory
}) => {
  return (
    <section id="categories-section" className="py-12 bg-[#F5F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
              Curated Collections
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              SHOP BY CATEGORY
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 sm:mt-0 font-medium">
            Genuine devices & accessories backed by warranty and direct phone dispatch
          </p>
        </div>

        {/* Categories Grid - 8 Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                id={`category-card-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`group flex flex-col bg-white rounded-xl overflow-hidden text-left border transition-all duration-300 hover:shadow-md ${
                  isSelected 
                    ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-md' 
                    : 'border-slate-200 hover:border-blue-400'
                }`}
              >
                {/* Image Container - Square Aspect Ratio */}
                <div className="relative aspect-square w-full bg-slate-100 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white p-1 rounded-full shadow">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-2.5 flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {cat.count}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
