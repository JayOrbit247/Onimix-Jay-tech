import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  PhoneCall, 
  Headphones, 
  CheckCircle, 
  Lock, 
  Clock, 
  BadgeCheck 
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/format';

export const WhyShopSection: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: WHY SHOP ONIMIX JAY TECH - 4 Premium Feature Blocks */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Lagos Premier Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              WHY SHOP ONIMIX JAY TECH
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              We combine the rigor of international electronics retail with direct, reliable Lagos delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. AUTHENTIC PRODUCTS */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all group text-left">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-1">
                AUTHENTIC PRODUCTS
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Quality devices from trusted brands. Brand new, factory-sealed hardware with serial verification on delivery.
              </p>
            </div>

            {/* 2. LAGOS DELIVERY */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all group text-left">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 mb-4 group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-1">
                LAGOS DELIVERY
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fast delivery across Lagos State. Priority dispatch riders covering the Island and Mainland daily.
              </p>
            </div>

            {/* 3. PHONE ORDERING */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all group text-left">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-1">
                PHONE ORDERING
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Speak directly with our sales team. Place and confirm your order in seconds on <a href={PHONE_TEL} className="font-bold text-blue-600">{PHONE_DISPLAY}</a>.
              </p>
            </div>

            {/* 4. PRODUCT SUPPORT */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all group text-left">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-1">
                PRODUCT SUPPORT
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Get help choosing the right device. Our tech specialists advise on RAM, storage, battery, and compatibility.
              </p>
            </div>

          </div>
        </div>

        {/* Section 2: SHOP WITH CONFIDENCE (Trust Section) */}
        <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Integrity & Peace of Mind
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              SHOP WITH CONFIDENCE
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Every device order is backed by stringent verification and dedicated Lagos post-purchase care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/60 border border-slate-800">
              <Lock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">Secure Ordering</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Confirm inventory and inspect specifications before payment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/60 border border-slate-800">
              <BadgeCheck className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">Product Warranty</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Comprehensive 1 to 2-year manufacturer and local Lagos coverage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/60 border border-slate-800">
              <Truck className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">Delivery Support</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Live dispatch tracking with direct rider contact for Lagos buyers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/60 border border-slate-800">
              <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">Customer Assistance</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Dedicated Lagos phone lines open 7 days a week for immediate questions.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
