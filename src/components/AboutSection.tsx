import React from 'react';
import { ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Our Vision</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
          TECHNOLOGY, WITHOUT THE HASSLE.
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Onimix jay Tech Lagos is a fictional premium electronics retailer created for this website concept. Our goal is to make shopping for smartphones, laptops and accessories simple, transparent and convenient for customers across Lagos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-sm text-slate-900 mb-1">Curated Inventory</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every device is hand-selected and batch-tested for Lagos power reliability and connectivity.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-sm text-slate-900 mb-1">Human-First Sales</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Skip cumbersome checkout forms. Call our sales desk directly to place orders and verify specs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-sm text-slate-900 mb-1">Lagos Rapid Dispatch</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Insured courier delivery across all 20 Local Government Areas within hours.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
