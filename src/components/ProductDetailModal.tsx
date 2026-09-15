import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Phone, 
  MessageCircle, 
  ShoppingCart, 
  Truck, 
  Shield, 
  Check, 
  Minus, 
  Plus, 
  Package, 
  Clock, 
  HelpCircle,
  Share2
} from 'lucide-react';
import { Product } from '../types';
import { formatNaira, PHONE_TEL, PHONE_DISPLAY, createProductWhatsAppUrl } from '../lib/format';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, color?: string, storage?: string) => void;
  onSelectRelated: (product: Product) => void;
  allProducts: Product[];
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onSelectRelated,
  allProducts
}) => {
  if (!product) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || '');
  const [selectedStorage, setSelectedStorage] = useState(product.storageOptions?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'box' | 'delivery' | 'warranty' | 'reviews'>('specs');
  const [copiedToast, setCopiedToast] = useState(false);

  const discountPercent = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedColor, selectedStorage);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2000);
  };

  const variantText = [selectedColor, selectedStorage].filter(Boolean).join(' - ');
  const whatsappUrl = createProductWhatsAppUrl(product.name, quantity, product.price, variantText);

  // Related products from same category or brand
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        id="product-detail-modal"
        className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col relative"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-500">
            <img src="/logo.png" alt="Onimix jay TECH LAGOS" className="h-6 w-auto object-contain" />
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="text-slate-800 font-bold truncate max-w-xs">{product.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:text-blue-600 rounded-lg hover:bg-slate-200/60 transition-colors"
              title="Share product link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              id="close-product-detail-btn"
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {copiedToast && (
          <div className="absolute top-16 right-6 z-20 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg">
            Product link copied to clipboard!
          </div>
        )}

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
          
          {/* Main Top Grid: Left Gallery + Right Purchase Information */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: Large Product Image & Thumbnail Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center p-6">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 text-xs font-black uppercase px-2.5 py-1 rounded bg-slate-900 text-white tracking-wider">
                    {product.badge}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="absolute top-4 right-4 z-10 text-xs font-bold bg-red-600 text-white px-2 py-1 rounded">
                    Save {discountPercent}%
                  </span>
                )}
                <img
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply transition-all duration-300"
                />
              </div>

              {/* Thumbnail Gallery Underneath */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 bg-slate-50 flex-shrink-0 transition-all ${
                        selectedImageIndex === idx 
                          ? 'border-blue-600 ring-2 ring-blue-500/20' 
                          : 'border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-contain mix-blend-multiply p-1"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick Trust Badges below photo */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">Lagos Fast Dispatch</p>
                    <p className="text-[11px] text-slate-500">Same-day across Lagos</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">Authentic Warranty</p>
                    <p className="text-[11px] text-slate-500">100% genuine guaranteed</p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT: Product Details & Buying Options */}
            <div className="lg:col-span-6 space-y-5 text-left">
              
              {/* Category & Brand */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                <span>{product.brand}</span>
                <span>•</span>
                <span>{product.category}</span>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 text-xs sm:text-sm">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-amber-100 text-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-slate-800">{product.rating.toFixed(1)}</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-600 underline cursor-pointer" onClick={() => setActiveTab('reviews')}>
                  {product.reviewsCount} customer reviews
                </span>
                <span className="text-slate-400">|</span>
                <span className="text-green-700 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> In Stock Lagos
                </span>
              </div>

              {/* Price & Discounts */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">
                    {formatNaira(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-base text-slate-400 line-through">
                      {formatNaira(product.oldPrice)}
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">
                      Save {formatNaira(product.oldPrice! - product.price)}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Prices inclusive of VAT. Tested and sealed in box.
                </p>
              </div>

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                    <span>Select Color: <span className="text-blue-600 font-extrabold">{selectedColor}</span></span>
                  </label>
                  <div className="flex items-center gap-3">
                    {product.colors.map(color => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold transition-all ${
                          selectedColor === color.name
                            ? 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-500/20'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span 
                          className="w-4 h-4 rounded-full border border-black/10 flex-shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Storage Selector */}
              {product.storageOptions && product.storageOptions.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Select Capacity: <span className="text-blue-600 font-extrabold">{selectedStorage}</span>
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {product.storageOptions.map(storage => (
                      <button
                        key={storage}
                        onClick={() => setSelectedStorage(storage)}
                        className={`px-4 py-2 rounded-lg border text-xs font-bold transition-all ${
                          selectedStorage === storage
                            ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                        }`}
                      >
                        {storage}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Quantity:</span>
                <div className="flex items-center border border-slate-300 rounded-lg bg-slate-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-slate-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* ACTION BUTTONS (ADD TO CART, CALL TO ORDER, WHATSAPP ORDER) */}
              <div className="space-y-3 pt-2">
                
                {/* 1. ADD TO CART */}
                <button
                  id="detail-add-to-cart-btn"
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all transform active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>ADD TO CART ({formatNaira(product.price * quantity)})</span>
                </button>

                {/* 2. CALL TO ORDER (Primary Phone Ordering Mandate) */}
                <a
                  href={PHONE_TEL}
                  id="detail-call-to-order-btn"
                  className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 border border-slate-800 transition-all transform active:scale-95"
                >
                  <Phone className="w-5 h-5 text-green-400 animate-pulse" />
                  <span>CALL TO ORDER: {PHONE_DISPLAY}</span>
                </a>

                {/* 3. ORDER VIA WHATSAPP (Pre-filled requirement) */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="detail-whatsapp-order-btn"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>ORDER VIA WHATSAPP</span>
                </a>

              </div>

              {/* Delivery Information & Need help prompt */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                  <Truck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Delivery Information: Fast delivery available across Lagos.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-blue-800">
                  <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Need help choosing? <a href={PHONE_TEL} className="font-extrabold underline">Call {PHONE_DISPLAY}</a></span>
                </div>
              </div>

            </div>

          </div>

          {/* LOWER TABS: Description, Specifications, What's in the Box, Delivery, Warranty, Reviews */}
          <div className="pt-6 border-t border-slate-200">
            {/* Tabs Header */}
            <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-px">
              {[
                { id: 'specs', label: 'Specifications' },
                { id: 'box', label: "What's in the Box" },
                { id: 'delivery', label: 'Delivery Information' },
                { id: 'warranty', label: 'Warranty & Support' },
                { id: 'reviews', label: `Reviews (${product.reviewsCount})` }
              ].map(tab => (
                <button
                  key={tab.id}
                  id={`tab-btn-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-3 text-xs sm:text-sm font-bold tracking-tight border-b-2 whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="py-6 text-left">
              
              {/* 1. Specifications */}
              {activeTab === 'specs' && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl pt-2">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{key}</span>
                        <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. What's in the Box */}
              {activeTab === 'box' && (
                <div className="max-w-2xl space-y-3">
                  <p className="text-xs text-slate-500 font-medium">All retail items are brand new, sealed, and verified authentic before dispatch:</p>
                  <ul className="space-y-2.5">
                    {product.whatsInTheBox.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <Package className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 3. Delivery Information */}
              {activeTab === 'delivery' && (
                <div className="max-w-2xl space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 space-y-2">
                    <h4 className="font-bold text-blue-900 text-sm">Tech Delivered Across Lagos State</h4>
                    <p className="text-xs text-slate-600">
                      We dispatch securely via insured motor couriers across Lagos. Devices are thoroughly inspected and you can test your device upon delivery.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    {['Ikeja (2-4 hrs)', 'Lekki (3-5 hrs)', 'Victoria Island (3-5 hrs)', 'Yaba (2-4 hrs)', 'Surulere (3-5 hrs)', 'Maryland (2-4 hrs)'].map((loc, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        <span>{loc}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500">
                    Call our dispatch coordinator at <a href={PHONE_TEL} className="font-bold text-blue-600">{PHONE_DISPLAY}</a> for urgent express delivery.
                  </p>
                </div>
              )}

              {/* 4. Warranty */}
              {activeTab === 'warranty' && (
                <div className="max-w-2xl space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
                    <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-green-950 text-sm">Official Warranty Protection</h4>
                      <p className="text-xs text-green-800 mt-1">{product.warranty}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">
                    Covers hardware failures, manufacturer defects, and system troubleshooting. Supported directly through our Lagos service centers.
                  </p>
                </div>
              )}

              {/* 5. Customer Reviews */}
              {activeTab === 'reviews' && (
                <div className="max-w-3xl space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-center pr-4 border-r border-slate-300">
                      <p className="text-3xl font-black text-slate-900">{product.rating.toFixed(1)}</p>
                      <p className="text-[11px] text-slate-500">out of 5 stars</p>
                    </div>
                    <div className="text-xs text-slate-600">
                      <p className="font-bold text-slate-800">Based on {product.reviewsCount} verified Lagos customer orders.</p>
                      <p className="text-slate-500">All reviews come from verified buyers delivered in Lagos State.</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    {[
                      { name: 'Tunde B., Lekki Phase 1', date: '3 days ago', comment: 'Ordered the device over the phone at 10 AM, received it at my office by 2 PM. Sealed box, active warranty.', rating: 5 },
                      { name: 'Chioma E., Victoria Island', date: '1 week ago', comment: 'Top quality! The sales agent on 08101581209 was courteous and explained the specs thoroughly.', rating: 5 },
                      { name: 'Femi A., Ikeja GRA', date: '2 weeks ago', comment: 'Legit Lagos electronics dealer. Smooth WhatsApp confirmation and quick rider arrival.', rating: 5 }
                    ].map((rev, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-800">{rev.name}</span>
                          <span className="text-slate-400">{rev.date}</span>
                        </div>
                        <div className="flex text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400" />
                          ))}
                        </div>
                        <p className="text-slate-600 pt-1">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* RELATED PRODUCTS */}
          {relatedProducts.length > 0 && (
            <div className="pt-6 border-t border-slate-200 text-left">
              <h3 className="font-extrabold text-lg text-slate-900 mb-4">
                Customers Also Looked At
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {relatedProducts.map(rel => (
                  <div 
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer bg-white group flex flex-col justify-between"
                  >
                    <div className="aspect-square bg-slate-50 rounded-lg p-2 overflow-hidden flex items-center justify-center mb-2">
                      <img
                        src={rel.images[0]}
                        alt={rel.name}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600">
                        {rel.name}
                      </h4>
                      <p className="text-xs font-extrabold text-slate-900 mt-1">
                        {formatNaira(rel.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Sticky Bottom Bar */}
        <div className="px-6 py-3 bg-slate-900 text-white flex items-center justify-between flex-shrink-0 text-xs">
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-slate-400">Instant Phone Hotline:</span>
            <a href={PHONE_TEL} className="text-blue-400 font-extrabold hover:underline">{PHONE_DISPLAY}</a>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-slate-300 hover:text-white font-medium"
            >
              Continue Browsing
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
