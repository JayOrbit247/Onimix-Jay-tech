import React from 'react';
import { Phone, ArrowRight, Shield, Zap, Truck } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/format';

interface HeroProps {
  onShopiPhone: () => void;
  onShopLaptops: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopiPhone, onShopLaptops }) => {
  return (
    <section className="relative bg-[#0b1120] text-white overflow-hidden border-b border-slate-800">
      {/* Subtle glowing ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span>Official Lagos Inventory • 2026 Collection</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight font-sans">
                THE LATEST TECHNOLOGY.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                  READY FOR YOU.
                </span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed pt-2">
                Shop premium iPhones, MacBooks, laptops and accessories with fast delivery across Lagos.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  id="hero-shop-iphone-btn"
                  onClick={onShopiPhone}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 text-sm tracking-wide"
                >
                  SHOP IPHONE
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-shop-laptops-btn"
                  onClick={onShopLaptops}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold px-6 py-3.5 rounded-xl border border-slate-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide"
                >
                  SHOP LAPTOPS
                </button>
              </div>

              {/* Under the buttons phone highlight */}
              <div className="pt-1 flex items-center gap-2">
                <a
                  href={PHONE_TEL}
                  id="hero-call-order-link"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm sm:text-base group transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4 text-green-400 group-hover:text-white" />
                  </div>
                  <span>Call <span className="underline decoration-blue-500 font-extrabold text-white">{PHONE_DISPLAY}</span> to place your order</span>
                </a>
              </div>
            </div>

            {/* Micro value props */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Same-Day Lagos Transit</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Verified Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Tested on Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Hero Image (iPhone, MacBook, AirPods, Accessories on Dark Background) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-2 sm:p-4 shadow-2xl">
              
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&auto=format&fit=crop&q=80"
                  alt="Premium Apple and Windows Technology Collection in Lagos"
                  className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating overlay card for flagship preview */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-slate-700/80 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase bg-blue-600 text-white px-1.5 py-0.5 rounded">
                        FLAGSHIP PROMO
                      </span>
                      <span className="text-xs text-slate-300">Nova iPhone 17 Pro Max</span>
                    </div>
                    <p className="text-sm sm:text-base font-extrabold text-white">
                      ₦2,950,000 <span className="text-xs line-through text-slate-400 font-normal">₦3,150,000</span>
                    </p>
                  </div>

                  <a
                    href={PHONE_TEL}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors flex-shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call To Order</span>
                  </a>
                </div>
              </div>

              {/* Mini thumbnails previewing devices */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-3">
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-800 text-center">
                  <p className="text-[11px] font-bold text-white">iPhone 17 Pro</p>
                  <p className="text-[10px] text-blue-400">From ₦1.95M</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-800 text-center">
                  <p className="text-[11px] font-bold text-white">MacBook M4</p>
                  <p className="text-[10px] text-blue-400">From ₦2.15M</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-800 text-center">
                  <p className="text-[11px] font-bold text-white">Dell XPS 14</p>
                  <p className="text-[10px] text-blue-400">₦2.85M</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-800 text-center">
                  <p className="text-[11px] font-bold text-white">NovaPods Pro</p>
                  <p className="text-[10px] text-blue-400">₦480K</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
