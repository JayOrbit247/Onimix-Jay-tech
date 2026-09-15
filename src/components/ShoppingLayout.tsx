import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  X, 
  RotateCcw, 
  Star, 
  ChevronDown, 
  SlidersHorizontal,
  Check
} from 'lucide-react';
import { Product, FilterState } from '../types';
import { ProductCard } from './ProductCard';

interface ShoppingLayoutProps {
  products: Product[];
  filterState: FilterState;
  onUpdateFilter: (updates: Partial<FilterState>) => void;
  onResetFilters: () => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ShoppingLayout: React.FC<ShoppingLayoutProps> = ({
  products,
  filterState,
  onUpdateFilter,
  onResetFilters,
  onAddToCart,
  onViewDetails
}) => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Departments list from prompt
  const departments = [
    { label: 'All Departments', value: null },
    { label: 'Phones', value: 'Phones' },
    { label: 'iPhone', value: 'iPhone', isCategory: true },
    { label: 'iPad', value: 'iPad', isCategory: true },
    { label: 'MacBook', value: 'MacBook', isCategory: true },
    { label: 'Laptops', value: 'Laptops' },
    { label: 'Accessories', value: 'Accessories' },
    { label: 'Audio', value: 'Audio' },
    { label: 'Power & Charging', value: 'Power & Charging' }
  ];

  // Brands list from prompt
  const brands = [
    'Apple',
    'Samsung',
    'Dell',
    'HP',
    'Lenovo',
    'ASUS',
    'Anker',
    'UGREEN',
    'Baseus'
  ];

  // Price ranges from prompt
  const priceRanges = [
    { label: 'All Prices', value: null },
    { label: 'Under ₦300,000', value: 'under-300k', min: 0, max: 300000 },
    { label: '₦300,000 – ₦700,000', value: '300k-700k', min: 300000, max: 700000 },
    { label: '₦700,000 – ₦1,500,000', value: '700k-1.5m', min: 700000, max: 1500000 },
    { label: '₦1,500,000+', value: '1.5m-plus', min: 1500000, max: 100000000 }
  ];

  // Rating filters
  const ratingFilters = [
    { rating: 5, label: '5.0 Stars' },
    { rating: 4, label: '4.0 Stars & Up' },
    { rating: 3, label: '3.0 Stars & Up' }
  ];

  // Deals filters
  const dealFilters = [
    { label: 'All Items', value: 'all' },
    { label: 'On Sale', value: 'sale' },
    { label: 'Clearance', value: 'clearance' },
    { label: 'New Arrival', value: 'new' }
  ];

  // Handle brand toggle
  const toggleBrand = (brand: string) => {
    const nextBrands = filterState.brands.includes(brand)
      ? filterState.brands.filter(b => b !== brand)
      : [...filterState.brands, brand];
    onUpdateFilter({ brands: nextBrands });
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Search query
      if (filterState.searchQuery) {
        const q = filterState.searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchCategory = p.category.toLowerCase().includes(q);
        const matchSpecs = p.shortSpecs.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchCategory && !matchSpecs) {
          return false;
        }
      }

      // Category
      if (filterState.category && p.category !== filterState.category) {
        return false;
      }

      // Department
      if (filterState.department && p.department !== filterState.department) {
        return false;
      }

      // Brand
      if (filterState.brands.length > 0 && !filterState.brands.includes(p.brand)) {
        return false;
      }

      // Price Range
      if (filterState.priceRange) {
        const range = priceRanges.find(r => r.value === filterState.priceRange);
        if (range && range.min !== undefined && range.max !== undefined) {
          if (p.price < range.min || p.price > range.max) {
            return false;
          }
        }
      }

      // Rating
      if (filterState.minRating && p.rating < filterState.minRating) {
        return false;
      }

      // Availability
      if (filterState.availability === 'inStock' && !p.inStock) {
        return false;
      }

      // Deals
      if (filterState.dealFilter === 'sale' && !p.isDeal && p.badge !== 'SALE') {
        return false;
      }
      if (filterState.dealFilter === 'new' && !p.isNewArrival && p.badge !== 'NEW') {
        return false;
      }
      if (filterState.dealFilter === 'clearance' && p.price > 1000000) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'price-low') return a.price - b.price;
      if (filterState.sortBy === 'price-high') return b.price - a.price;
      if (filterState.sortBy === 'rating') return b.rating - a.rating;
      if (filterState.sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return 0; // featured default
    });
  }, [products, filterState]);

  const activeFilterCount = (filterState.department ? 1 : 0) +
    (filterState.category ? 1 : 0) +
    filterState.brands.length +
    (filterState.priceRange ? 1 : 0) +
    (filterState.minRating ? 1 : 0) +
    (filterState.availability !== 'all' ? 1 : 0) +
    (filterState.dealFilter !== 'all' ? 1 : 0) +
    (filterState.searchQuery ? 1 : 0);

  const renderSidebarContent = () => (
    <div className="space-y-6 text-sm text-slate-800">
      
      {/* Header & Reset */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <h3 className="font-extrabold text-base text-slate-900 tracking-tight flex items-center gap-2">
          <Filter className="w-4 h-4 text-blue-600" />
          Filter Products
        </h3>
        {activeFilterCount > 0 && (
          <button
            onClick={onResetFilters}
            className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            Clear
          </button>
        )}
      </div>

      {/* Department */}
      <div>
        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2.5">
          Department
        </h4>
        <ul className="space-y-1.5 text-xs">
          {departments.map((dept, idx) => {
            const isSelected = dept.isCategory 
              ? filterState.category === dept.value 
              : filterState.department === dept.value && !filterState.category;

            return (
              <li key={idx}>
                <button
                  id={`filter-dept-${dept.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => {
                    if (dept.isCategory) {
                      onUpdateFilter({ category: dept.value, department: null });
                    } else {
                      onUpdateFilter({ department: dept.value, category: null });
                    }
                  }}
                  className={`w-full text-left py-1 px-2 rounded-md transition-colors flex items-center justify-between ${
                    isSelected 
                      ? 'bg-blue-50 text-blue-600 font-bold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>{dept.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Brand Checkboxes */}
      <div className="pt-4 border-t border-slate-200">
        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2.5">
          Brand
        </h4>
        <div className="space-y-2 text-xs">
          {brands.map(brand => {
            const checked = filterState.brands.includes(brand);
            return (
              <label 
                key={brand}
                className="flex items-center gap-2 cursor-pointer text-slate-700 hover:text-slate-900"
              >
                <input
                  type="checkbox"
                  id={`filter-brand-${brand.toLowerCase()}`}
                  checked={checked}
                  onChange={() => toggleBrand(brand)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                />
                <span className={checked ? 'font-bold text-blue-600' : ''}>{brand}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div className="pt-4 border-t border-slate-200">
        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2.5">
          Price
        </h4>
        <div className="space-y-1.5 text-xs">
          {priceRanges.map((range, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer text-slate-700 hover:text-slate-900">
              <input
                type="radio"
                name="priceRange"
                id={`filter-price-${idx}`}
                checked={filterState.priceRange === range.value}
                onChange={() => onUpdateFilter({ priceRange: range.value })}
                className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-500 border-slate-300"
              />
              <span className={filterState.priceRange === range.value ? 'font-bold text-blue-600' : ''}>
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Customer Rating */}
      <div className="pt-4 border-t border-slate-200">
        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2.5">
          Customer Rating
        </h4>
        <div className="space-y-1.5 text-xs">
          {ratingFilters.map(r => {
            const isSelected = filterState.minRating === r.rating;
            return (
              <button
                key={r.rating}
                id={`filter-rating-${r.rating}`}
                onClick={() => onUpdateFilter({ minRating: isSelected ? null : r.rating })}
                className={`w-full flex items-center gap-2 py-1 px-1.5 rounded transition-colors text-left ${
                  isSelected ? 'bg-blue-50 text-blue-600 font-bold' : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < r.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200 fill-slate-100'
                      }`}
                    />
                  ))}
                </div>
                <span>{r.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Availability */}
      <div className="pt-4 border-t border-slate-200">
        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2.5">
          Availability
        </h4>
        <div className="space-y-1.5 text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-slate-700">
            <input
              type="radio"
              name="availability"
              checked={filterState.availability === 'all'}
              onChange={() => onUpdateFilter({ availability: 'all' })}
              className="w-3.5 h-3.5 text-blue-600"
            />
            <span>All Availability</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-slate-700">
            <input
              type="radio"
              name="availability"
              checked={filterState.availability === 'inStock'}
              onChange={() => onUpdateFilter({ availability: 'inStock' })}
              className="w-3.5 h-3.5 text-blue-600"
            />
            <span className="text-green-700 font-medium">In Stock</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-slate-700">
            <input
              type="radio"
              name="availability"
              checked={filterState.availability === 'order'}
              onChange={() => onUpdateFilter({ availability: 'order' })}
              className="w-3.5 h-3.5 text-blue-600"
            />
            <span>Available for Order</span>
          </label>
        </div>
      </div>

      {/* Deals */}
      <div className="pt-4 border-t border-slate-200">
        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2.5">
          Deals & Status
        </h4>
        <div className="space-y-1.5 text-xs">
          {dealFilters.map(d => (
            <label key={d.value} className="flex items-center gap-2 cursor-pointer text-slate-700">
              <input
                type="radio"
                name="dealFilter"
                checked={filterState.dealFilter === d.value}
                onChange={() => onUpdateFilter({ dealFilter: d.value as any })}
                className="w-3.5 h-3.5 text-blue-600"
              />
              <span className={filterState.dealFilter === d.value ? 'font-bold text-blue-600' : ''}>
                {d.label}
              </span>
            </label>
          ))}
        </div>
      </div>

    </div>
  );

  return (
    <section id="shopping-section" className="py-8 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Filter Trigger Button */}
        <div className="lg:hidden mb-4 flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
          <button
            onClick={() => setMobileFilterOpen(true)}
            id="mobile-open-filters-btn"
            className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg"
          >
            <SlidersHorizontal className="w-4 h-4 text-blue-600" />
            <span>Filter Products {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
          </button>

          <div className="text-xs text-slate-500 font-medium">
            {filteredProducts.length} devices available
          </div>
        </div>

        {/* Main Desktop 2-Column Structure: Sidebar (250px) + Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDEBAR (Desktop ~250px) */}
          <aside className="hidden lg:block w-64 flex-shrink-0 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm sticky top-36">
            {renderSidebarContent()}
          </aside>

          {/* MAIN PRODUCT RESULTS AREA */}
          <main className="flex-1 w-full min-w-0">
            
            {/* PRODUCT RESULTS HEADER */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Featured Products
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Explore our latest phones, laptops and accessories.
                </p>
              </div>

              {/* Sort By and Result Count */}
              <div className="flex items-center gap-4 self-end sm:self-auto flex-wrap">
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-lg">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </span>

                <div className="flex items-center gap-2">
                  <label htmlFor="sort-dropdown" className="text-xs font-semibold text-slate-600 whitespace-nowrap">
                    Sort by:
                  </label>
                  <div className="relative">
                    <select
                      id="sort-dropdown"
                      value={filterState.sortBy}
                      onChange={(e) => onUpdateFilter({ sortBy: e.target.value as any })}
                      className="bg-slate-50 border border-slate-300 text-slate-900 text-xs font-bold rounded-lg px-3 py-2 pr-8 appearance-none outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                      <option value="newest">Newest Arrivals</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Active Filters Pills */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs text-slate-400 font-medium">Active filters:</span>
                
                {filterState.searchQuery && (
                  <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-800 font-medium px-2.5 py-1 rounded-full">
                    Search: "{filterState.searchQuery}"
                    <button onClick={() => onUpdateFilter({ searchQuery: '' })} className="hover:text-blue-950">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {filterState.category && (
                  <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-800 font-medium px-2.5 py-1 rounded-full">
                    Category: {filterState.category}
                    <button onClick={() => onUpdateFilter({ category: null })} className="hover:text-blue-950">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {filterState.department && (
                  <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-800 font-medium px-2.5 py-1 rounded-full">
                    Department: {filterState.department}
                    <button onClick={() => onUpdateFilter({ department: null })} className="hover:text-blue-950">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {filterState.brands.map(brand => (
                  <span key={brand} className="inline-flex items-center gap-1 text-xs bg-slate-200 text-slate-800 font-medium px-2.5 py-1 rounded-full">
                    {brand}
                    <button onClick={() => toggleBrand(brand)} className="hover:text-slate-950">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}

                {filterState.priceRange && (
                  <span className="inline-flex items-center gap-1 text-xs bg-slate-200 text-slate-800 font-medium px-2.5 py-1 rounded-full">
                    {priceRanges.find(r => r.value === filterState.priceRange)?.label}
                    <button onClick={() => onUpdateFilter({ priceRange: null })} className="hover:text-slate-950">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                <button
                  onClick={onResetFilters}
                  className="text-xs text-red-600 hover:text-red-700 font-bold underline ml-1"
                >
                  Reset all
                </button>
              </div>
            )}

            {/* PRODUCT GRID: 4 columns desktop, 3 columns tablet, 2 columns mobile */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onViewDetails={onViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">No electronics match your current filter</h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                  Try broadening your search or resetting filters to browse our full catalog of premium iPhones, MacBooks, and accessories.
                </p>
                <button
                  onClick={onResetFilters}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}

          </main>

        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full p-5 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <h3 className="font-extrabold text-lg text-slate-900">Filters</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-800 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {renderSidebarContent()}
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
            </div>
          </div>

          <div className="flex-1" onClick={() => setMobileFilterOpen(false)} />
        </div>
      )}
    </section>
  );
};
