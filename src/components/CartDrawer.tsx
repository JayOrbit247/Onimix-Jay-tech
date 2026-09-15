import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Phone, 
  MessageCircle, 
  CreditCard, 
  ArrowRight, 
  ShoppingBag,
  MapPin,
  Truck
} from 'lucide-react';
import { CartItem } from '../types';
import { formatNaira, PHONE_TEL, PHONE_DISPLAY, createCartWhatsAppUrl } from '../lib/format';
import { LAGOS_LOCATIONS } from '../data/lagosLocations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onProceedToCheckout: () => void;
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  selectedLocation,
  onSelectLocation
}) => {
  if (!isOpen) return null;

  // Calculate subtotal
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Find delivery fee for selected location
  const locObj = LAGOS_LOCATIONS.find(l => l.name === selectedLocation) || LAGOS_LOCATIONS[0];
  const deliveryFee = items.length > 0 ? locObj.fee : 0;
  const total = subtotal + deliveryFee;

  const whatsappUrl = createCartWhatsAppUrl(items, subtotal, deliveryFee, selectedLocation);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        id="cart-drawer"
        className="w-full sm:max-w-md md:max-w-lg bg-white h-full flex flex-col shadow-2xl overflow-hidden transition-transform duration-300 text-slate-900"
      >
        {/* Cart Header */}
        <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Onimix jay TECH LAGOS" className="h-7 w-auto object-contain" />
            <div className="h-4 w-px bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <h2 className="font-extrabold text-sm sm:text-base text-slate-900">Cart</h2>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
          </div>

          <button
            id="close-cart-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-base text-slate-800">Your cart is currently empty</p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Explore our premium collection of iPhones, MacBooks, laptops and accessories.
                </p>
              </div>
              <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, index) => {
                const variantDetails = [item.selectedColor, item.selectedStorage].filter(Boolean).join(' • ');

                return (
                  <div
                    key={`${item.product.id}-${item.selectedColor}-${item.selectedStorage}-${index}`}
                    id={`cart-item-${index}`}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors flex gap-3 items-start"
                  >
                    {/* Image */}
                    <div className="w-16 h-16 rounded-lg bg-slate-50 border border-slate-100 flex-shrink-0 p-1 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                      {variantDetails && (
                        <p className="text-[11px] text-slate-500 font-medium">
                          {variantDetails}
                        </p>
                      )}
                      <p className="text-xs font-extrabold text-blue-600">
                        {formatNaira(item.product.price)}
                      </p>

                      {/* Quantity control & Remove */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center border border-slate-200 rounded-md bg-slate-50">
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                            className="p-1 text-slate-500 hover:text-slate-900"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                            className="p-1 text-slate-500 hover:text-slate-900"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-slate-400 hover:text-red-600 p-1 rounded transition-colors text-xs flex items-center gap-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span className="text-[10px]">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Delivery Location Selector in Cart */}
          {items.length > 0 && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  Lagos Delivery Zone:
                </span>
                <span className="text-blue-600 font-bold">{locObj.deliveryTime}</span>
              </div>

              <select
                value={selectedLocation}
                onChange={(e) => onSelectLocation(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-800 outline-none focus:border-blue-500 cursor-pointer"
              >
                {LAGOS_LOCATIONS.map(loc => (
                  <option key={loc.name} value={loc.name}>
                    {loc.name} ({loc.region}) — {formatNaira(loc.fee)}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Cart Footer / Summary & Actions */}
        {items.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3 flex-shrink-0">
            {/* Price breakdown */}
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">{formatNaira(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Lagos Delivery Fee ({selectedLocation})</span>
                <span className="font-bold text-slate-900">{formatNaira(deliveryFee)}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                <span>Total</span>
                <span className="text-blue-600">{formatNaira(total)}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-1">
              {/* CHECKOUT */}
              <button
                id="cart-checkout-btn"
                onClick={onProceedToCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* CALL TO ORDER */}
              <a
                href={PHONE_TEL}
                id="cart-call-to-order-btn"
                className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-green-400" />
                <span>CALL TO ORDER: {PHONE_DISPLAY}</span>
              </a>

              {/* WHATSAPP ORDER */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cart-whatsapp-order-btn"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>ORDER VIA WHATSAPP</span>
              </a>

              {/* CONTINUE SHOPPING */}
              <button
                onClick={onClose}
                className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
