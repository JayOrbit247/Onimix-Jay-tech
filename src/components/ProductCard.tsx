import React from 'react';
import { Star, Phone, ShoppingCart, Truck, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { formatNaira, PHONE_TEL, PHONE_DISPLAY } from '../lib/format';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails
}) => {
  const discountPercent = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  const badgeStyles: Record<string, string> = {
    'NEW': 'bg-blue-600 text-white',
    'BEST SELLER': 'bg-amber-500 text-slate-950 font-black',
    'SALE': 'bg-red-600 text-white'
  };

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-white rounded-xl border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Top: Image & Badges */}
        <div 
          onClick={() => onViewDetails(product)}
          className="relative aspect-square w-full bg-slate-50 overflow-hidden cursor-pointer p-4 flex items-center justify-center"
        >
          {/* Badge */}
          {product.badge && (
            <span 
              className={`absolute top-2.5 left-2.5 z-10 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider shadow-sm ${
                badgeStyles[product.badge] || 'bg-slate-800 text-white'
              }`}
            >
              {product.badge}
            </span>
          )}

          {/* Discount Percentage tag if applicable */}
          {discountPercent > 0 && (
            <span className="absolute top-2.5 right-2.5 z-10 text-[10px] font-bold bg-red-100 text-red-700 px-1.5 py-0.5 rounded">
              -{discountPercent}%
            </span>
          )}

          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Info Area */}
        <div className="p-3.5 sm:p-4 space-y-2 text-left">
          
          {/* Brand & Department */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
            <span>{product.brand}</span>
            <span>{product.category}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onViewDetails(product)}
            className="font-bold text-sm sm:text-base text-slate-900 line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors leading-snug"
          >
            {product.name}
          </h3>

          {/* Star Rating & Review Count */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : i < product.rating
                      ? 'fill-amber-200 text-amber-400'
                      : 'text-slate-200 fill-slate-100'
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold text-slate-700">{product.rating.toFixed(1)}</span>
            <span className="text-slate-400">({product.reviewsCount})</span>
          </div>

          {/* Short Specs */}
          <p className="text-xs text-slate-500 line-clamp-1">
            {product.shortSpecs}
          </p>

          {/* Price */}
          <div className="pt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                {formatNaira(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {formatNaira(product.oldPrice)}
                </span>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-1 text-[11px] font-semibold text-green-700 mt-1">
              <CheckCircle2 className="w-3 h-3 text-green-600" />
              <span>{product.inStock ? 'Available' : 'Order on Demand'}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Card Footer CTAs */}
      <div className="p-3.5 sm:p-4 pt-0 space-y-2">
        {/* ADD TO CART */}
        <button
          id={`add-to-cart-${product.id}`}
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2.5 px-3 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>ADD TO CART</span>
        </button>

        {/* Call to order secondary CTA */}
        <div className="flex items-center justify-between text-xs pt-1">
          <a
            href={PHONE_TEL}
            id={`call-order-${product.id}`}
            className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-green-600" />
            <span>Call to order</span>
          </a>

          <span className="text-[10px] text-slate-400 flex items-center gap-1">
            <Truck className="w-3 h-3 text-slate-400" />
            Lagos delivery
          </span>
        </div>

        <p className="text-[10px] text-slate-400 text-center">
          Delivery available across Lagos
        </p>
      </div>
    </div>
  );
};
