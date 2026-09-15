import React from 'react';
import { Phone, MapPin, Mail, Shield, Truck, Heart } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_INTL, PHONE_TEL } from '../lib/format';

interface FooterProps {
  onSelectCategory: (cat: string | null) => void;
  onOpenDeliveryInfo: () => void;
  onScrollToAbout: () => void;
  onScrollToContact: () => void;
  onOpenDeals: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenDeliveryInfo,
  onScrollToAbout,
  onScrollToContact,
  onOpenDeals
}) => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 font-sans border-t border-slate-800 pb-20 md:pb-8">
      {/* Top Value Strip */}
      <div className="border-b border-slate-800/80 py-8 bg-[#0b1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Phone Ordering</p>
              <a href={PHONE_TEL} className="text-sm font-extrabold text-blue-400 hover:text-blue-300">{PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Lagos Delivery</p>
              <p className="text-xs text-slate-400">Mainland & Island Same-Day</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Authentic Stock</p>
              <p className="text-xs text-slate-400">100% Guaranteed Genuine</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Ikeja Hub</p>
              <p className="text-xs text-slate-400">Lagos State, Nigeria</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onSelectCategory(null); }}
              className="inline-block"
            >
              <img 
                src="/logo.png" 
                alt="Onimix jay TECH LAGOS" 
                className="h-12 sm:h-14 w-auto max-w-[220px] object-contain"
              />
            </a>

            <p className="text-sm font-semibold text-blue-300 italic">
              "Premium Technology. Delivered."
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A premium Lagos-based electronics retailer specializing in genuine iPhones, MacBooks, Windows laptops, iPads, chargers, power banks, AirPods, and essential mobile accessories.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={PHONE_TEL}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors inline-flex"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* COLUMN 1: SHOP */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onSelectCategory('iPhone')} className="hover:text-white transition-colors">
                  iPhone
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('MacBook')} className="hover:text-white transition-colors">
                  MacBook
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Laptops')} className="hover:text-white transition-colors">
                  Laptops
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('iPad')} className="hover:text-white transition-colors">
                  iPad
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Phone Accessories')} className="hover:text-white transition-colors">
                  Accessories
                </button>
              </li>
              <li>
                <button onClick={onOpenDeals} className="text-amber-400 font-bold hover:text-amber-300 transition-colors">
                  Deals & Clearance
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: CUSTOMER SERVICE */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              CUSTOMER SERVICE
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={onScrollToContact} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={onOpenDeliveryInfo} className="hover:text-white transition-colors">
                  Delivery Info
                </button>
              </li>
              <li>
                <button onClick={onScrollToContact} className="hover:text-white transition-colors">
                  Order Help
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer" onClick={onScrollToAbout}>
                  Returns Policy
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer" onClick={onScrollToAbout}>
                  Warranty Terms
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: ABOUT & CONTACT */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              CONTACT & ABOUT
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <p className="text-[11px] text-slate-500 uppercase font-bold">Call To Order</p>
                <a href={PHONE_TEL} className="font-extrabold text-white hover:text-blue-400 text-sm">
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div>
                <p className="text-[11px] text-slate-500 uppercase font-bold">Headquarters</p>
                <p className="text-slate-300 font-medium">Lagos State, Nigeria</p>
              </div>

              <div>
                <p className="text-[11px] text-slate-500 uppercase font-bold">Prototype Email</p>
                <p className="text-slate-400">hello@novatechlagos.example</p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <button onClick={onScrollToAbout} className="text-blue-400 hover:underline">
                  About Our Brand
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Onimix jay TECH LAGOS. All rights reserved. Fictional prototype concept.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-slate-400">Privacy Policy</span>
            <span>•</span>
            <span className="text-slate-400">Terms of Service</span>
            <span>•</span>
            <span className="text-slate-400">Lagos Dispatch Notice</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
