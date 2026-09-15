import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_INTL, PHONE_TEL, WHATSAPP_BASE } from '../lib/format';

interface ContactSectionProps {
  onShopNow: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShopNow }) => {
  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello Onimix jay Tech Lagos, I need assistance choosing a device or placing an order.")}`;

  return (
    <section id="contact-section" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Personal Concierge Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            NEED HELP?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Speak directly with our customer advisors for device recommendations, stock availability, or express delivery in Lagos.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          
          {/* 1. Phone Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900">Direct Phone Ordering</h3>
            <div className="space-y-1">
              <p className="text-lg font-black text-blue-600">{PHONE_DISPLAY}</p>
              <p className="text-xs text-slate-500">International: {PHONE_INTL}</p>
            </div>
            <p className="text-[11px] text-slate-400">Lines open Monday – Sunday, 8am – 9pm WAT</p>
          </div>

          {/* 2. Location Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900">Location</h3>
            <div className="space-y-1">
              <p className="text-base font-bold text-slate-800">Lagos State, Nigeria</p>
              <p className="text-xs text-slate-500">Central Ikeja Dispatch & Island Distribution</p>
            </div>
            <p className="text-[11px] text-slate-400">Delivering to Mainland & Island daily</p>
          </div>

          {/* 3. Email Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900">Electronic Mail</h3>
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-800 break-all">hello@novatechlagos.example</p>
              <div className="inline-flex items-center gap-1 text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                <AlertCircle className="w-3 h-3" />
                <span>Prototype business email</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400">Response within 2 business hours</p>
          </div>

        </div>

        {/* Three Required Action Buttons: CALL US, WHATSAPP US, SHOP NOW */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg mx-auto">
          
          <a
            href={PHONE_TEL}
            id="contact-call-us-btn"
            className="flex-1 min-w-[140px] bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-green-300" />
            <span>CALL US</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp-us-btn"
            className="flex-1 min-w-[140px] bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-3.5 px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WHATSAPP US</span>
          </a>

          <button
            onClick={onShopNow}
            id="contact-shop-now-btn"
            className="flex-1 min-w-[140px] bg-slate-900 hover:bg-black text-white font-extrabold py-3.5 px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>SHOP NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
