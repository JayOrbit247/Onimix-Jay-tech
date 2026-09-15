import React, { useState } from 'react';
import { MapPin, Truck, Check, Clock, ChevronRight, X, Phone } from 'lucide-react';
import { LAGOS_LOCATIONS } from '../data/lagosLocations';
import { formatNaira, PHONE_TEL, PHONE_DISPLAY } from '../lib/format';

interface LagosDeliverySectionProps {
  onSelectLocationForShop?: (loc: string) => void;
}

export const LagosDeliverySection: React.FC<LagosDeliverySectionProps> = ({
  onSelectLocationForShop
}) => {
  const [showCheckDeliveryModal, setShowCheckDeliveryModal] = useState(false);
  const [selectedLocName, setSelectedLocName] = useState('Ikeja');

  const selectedLocation = LAGOS_LOCATIONS.find(l => l.name === selectedLocName) || LAGOS_LOCATIONS[0];

  const primaryLocations = [
    'Ikeja',
    'Lekki Phase 1',
    'Victoria Island (VI)',
    'Yaba',
    'Surulere',
    'Maryland',
    'Gbagada',
    'Agege',
    'Abule-Egba',
    'Alimosho'
  ];

  return (
    <section id="lagos-delivery-section" className="py-14 bg-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle map / radial glow effect */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-xs font-semibold text-blue-300">
              <Truck className="w-3.5 h-3.5 text-blue-400" />
              <span>Same-Day & Express Dispatch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              TECH DELIVERED ACROSS LAGOS
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Order your next phone, laptop or accessory and arrange delivery across Lagos State. Our trained logistics riders ensure secure, padded, and insured delivery right to your residential address or corporate office.
            </p>

            <p className="text-xs text-slate-400 font-medium">
              * Delivery availability and fees vary by location.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="check-delivery-cta-btn"
                onClick={() => setShowCheckDeliveryModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>CHECK DELIVERY RATES</span>
              </button>

              <a
                href={PHONE_TEL}
                className="text-xs sm:text-sm font-bold text-slate-300 hover:text-white flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-green-400" />
                <span>Call Dispatch: {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Location Tags / Showcase */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Popular Lagos Delivery Zones
                </span>
                <span className="text-[11px] text-green-400 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> 16+ LGAs Covered
                </span>
              </div>

              {/* Grid of 10 primary locations from prompt */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                {primaryLocations.map((locName) => {
                  const loc = LAGOS_LOCATIONS.find(l => l.name === locName || l.name.startsWith(locName));
                  const fee = loc ? loc.fee : 4000;
                  const time = loc ? loc.deliveryTime : 'Same Day';

                  return (
                    <div
                      key={locName}
                      onClick={() => {
                        setSelectedLocName(loc ? loc.name : locName);
                        setShowCheckDeliveryModal(true);
                      }}
                      className="p-3 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500 transition-all cursor-pointer text-left group flex items-center justify-between"
                    >
                      <div>
                        <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                          <span>{locName}</span>
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{time}</p>
                      </div>
                      <span className="text-[11px] font-extrabold text-blue-300">
                        {formatNaira(fee)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => setShowCheckDeliveryModal(true)}
                  className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center justify-center gap-1 mx-auto"
                >
                  <span>View all Lagos locations & timelines</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Delivery Calculator Modal */}
      {showCheckDeliveryModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 max-w-lg w-full rounded-2xl shadow-2xl p-6 relative border border-slate-200">
            <button
              onClick={() => setShowCheckDeliveryModal(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h3 className="font-extrabold text-lg text-slate-900">Lagos Delivery Rate Calculator</h3>
                <p className="text-xs text-slate-500">Calculate delivery duration and transit fee</p>
              </div>
            </div>

            <div className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select your Lagos location:
                </label>
                <select
                  value={selectedLocName}
                  onChange={(e) => setSelectedLocName(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 text-sm font-semibold outline-none focus:border-blue-500"
                >
                  {LAGOS_LOCATIONS.map(loc => (
                    <option key={loc.name} value={loc.name}>
                      {loc.name} — {loc.region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Result card */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-600">Estimated Delivery Fee:</span>
                  <span className="text-xl font-black text-blue-700">{formatNaira(selectedLocation.fee)}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-600">Transit Window:</span>
                  <span className="text-xs font-extrabold text-slate-900">{selectedLocation.deliveryTime}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-600">Region:</span>
                  <span className="text-xs font-semibold text-slate-700">Lagos {selectedLocation.region}</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 space-y-1">
                <p className="font-semibold text-slate-700">• Same-day delivery applies to orders placed before 3:00 PM WAT.</p>
                <p>• Customers can test their iPhone, MacBook or accessories upon delivery before rider leaves.</p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={PHONE_TEL}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {PHONE_DISPLAY} to Arrange Dispatch</span>
                </a>
                
                <button
                  onClick={() => setShowCheckDeliveryModal(false)}
                  className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
