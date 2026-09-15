import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  MapPin, 
  Truck, 
  Store, 
  ShieldCheck, 
  ArrowLeft,
  AlertCircle,
  CheckCircle,
  MessageCircle,
  Clock
} from 'lucide-react';
import { CartItem } from '../types';
import { formatNaira, PHONE_TEL, PHONE_DISPLAY, PHONE_INTL, WHATSAPP_BASE } from '../lib/format';
import { LAGOS_LOCATIONS } from '../data/lagosLocations';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  selectedLocation: string;
  onOrderCompleted: (orderRef: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  selectedLocation,
  onOrderCompleted
}) => {
  if (!isOpen) return null;

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [city, setCity] = useState(selectedLocation || 'Ikeja');
  const [state] = useState('Lagos'); // Default state Lagos as per prompt
  const [deliveryMethod, setDeliveryMethod] = useState<'Home Delivery' | 'Pickup'>('Home Delivery');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedOrder, setSubmittedOrder] = useState<any>(null);

  // Math
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const locObj = LAGOS_LOCATIONS.find(l => l.name === city) || LAGOS_LOCATIONS[0];
  const deliveryFee = deliveryMethod === 'Home Delivery' ? (locObj ? locObj.fee : 4000) : 0;
  const total = subtotal + deliveryFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg('Please enter your full name and reachable Lagos phone number.');
      return;
    }
    if (deliveryMethod === 'Home Delivery' && !deliveryAddress.trim()) {
      setErrorMsg('Please enter your delivery street address in Lagos.');
      return;
    }

    setErrorMsg('');
    const randomCode = 'ONT-' + Math.floor(100000 + Math.random() * 900000);
    const orderData = {
      orderCode: randomCode,
      fullName,
      phone,
      email,
      deliveryAddress,
      city,
      state,
      deliveryMethod,
      items,
      subtotal,
      deliveryFee,
      total,
      date: new Date().toLocaleDateString('en-GB')
    };

    setSubmittedOrder(orderData);
    onOrderCompleted(randomCode);
  };

  // If order was submitted, show the phone confirmation screen as strictly specified:
  // "Payment section: Phone confirmation
  // After submitting your order, call 0810 158 1209 to confirm availability and payment.
  // Do NOT create fake payment success screens.
  // The main purchase confirmation should happen through phone ordering."
  if (submittedOrder) {
    const whatsappText = `Hello Onimix jay Tech Lagos, I have placed order #${submittedOrder.orderCode}.
Name: ${submittedOrder.fullName}
Phone: ${submittedOrder.phone}
Total: ${formatNaira(submittedOrder.total)}
Delivery to: ${submittedOrder.city}, Lagos State.

I am calling now to confirm product availability and finalize payment.`;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white max-w-xl w-full rounded-2xl shadow-2xl p-6 sm:p-8 text-center relative border border-slate-200">
          
          <div className="flex justify-center mb-4">
            <img 
              src="/logo.png" 
              alt="Onimix jay TECH LAGOS" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600 mb-3">
            <Phone className="w-7 h-7 animate-pulse text-blue-600" />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Order Reference Generated
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Order Ref: <span className="text-blue-600">{submittedOrder.orderCode}</span>
          </h2>

          <p className="text-sm font-semibold text-slate-800 mt-2">
            "After submitting your order, call 0810 158 1209 to confirm availability and payment."
          </p>

          <p className="text-xs text-slate-500 max-w-md mx-auto mt-2 leading-relaxed">
            In accordance with Onimix jay Tech Lagos security protocol, all tech dispatches are personally verified by phone. Please place a quick call now so our inventory team can reserve your sealed device for immediate dispatch.
          </p>

          {/* Highlighted Call Action */}
          <div className="my-6 p-4 rounded-xl bg-slate-900 text-white space-y-3 shadow-lg">
            <p className="text-xs text-slate-300 font-medium">Click below to dial our Lagos sales desk immediately:</p>
            <a
              href={PHONE_TEL}
              id="confirm-order-call-btn"
              className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-black text-base sm:text-lg py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-95"
            >
              <Phone className="w-5 h-5 text-green-300" />
              <span>CALL {PHONE_DISPLAY}</span>
            </a>
            <p className="text-[11px] text-slate-400">
              International format: <span className="text-slate-200">{PHONE_INTL}</span>
            </p>
          </div>

          {/* Secondary WhatsApp Confirmation */}
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            id="confirm-order-whatsapp-btn"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors mb-4"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Confirm Order Via WhatsApp</span>
          </a>

          {/* Summary Box */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2 mb-6">
            <div className="flex justify-between font-semibold text-slate-700">
              <span>Customer:</span>
              <span>{submittedOrder.fullName} ({submittedOrder.phone})</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-700">
              <span>Delivery Method:</span>
              <span>{submittedOrder.deliveryMethod} ({submittedOrder.city}, Lagos)</span>
            </div>
            <div className="flex justify-between font-bold text-slate-900 border-t border-slate-200 pt-2 text-sm">
              <span>Amount Due upon confirmation:</span>
              <span className="text-blue-600 font-extrabold">{formatNaira(submittedOrder.total)}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800 font-bold"
          >
            Return to Store
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div 
        id="checkout-modal"
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col relative text-slate-900"
      >
        {/* Header */}
        <div className="px-6 py-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Onimix jay TECH LAGOS" className="h-8 w-auto object-contain" />
            <div className="h-4 w-px bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
              <Truck className="w-4 h-4 text-blue-600" />
              <span>Checkout & Lagos Delivery</span>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-checkout-btn"
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmitOrder} className="overflow-y-auto flex-1 p-6 space-y-6 text-left">
          
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Customer Information & Delivery Method */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">1</span>
                  Customer Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="sm:col-span-2">
                    <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Babatunde Adeleke"
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone Number (Required for call confirmation) *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0803 123 4567"
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@lagostech.ng"
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Method */}
              <div className="pt-2">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">2</span>
                  Delivery Method
                </h3>
                
                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('Home Delivery')}
                    className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                      deliveryMethod === 'Home Delivery'
                        ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20 text-blue-900'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Truck className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Home / Office Delivery</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Insured dispatch to your doorstep</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('Pickup')}
                    className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                      deliveryMethod === 'Pickup'
                        ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20 text-blue-900'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Store className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Ikeja Hub Pickup</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Pick up directly in Lagos (Free)</p>
                    </div>
                  </button>
                </div>

                {deliveryMethod === 'Home Delivery' ? (
                  <div className="space-y-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Street Address in Lagos *</label>
                      <input
                        type="text"
                        required
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="House/Plot number, Street name, Estate/Area"
                        className="w-full p-2.5 rounded-lg border border-slate-300 bg-white text-sm outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Lagos Area / City *</label>
                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full p-2.5 rounded-lg border border-slate-300 bg-white text-xs font-semibold outline-none"
                        >
                          {LAGOS_LOCATIONS.map(loc => (
                            <option key={loc.name} value={loc.name}>
                              {loc.name} ({loc.region})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">State</label>
                        <input
                          type="text"
                          disabled
                          value={state}
                          className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-100 text-slate-500 text-xs font-bold"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                    <p className="font-bold text-slate-900">Pickup Location:</p>
                    <p>Onimix jay Tech Lagos Central Hub, Allen Avenue / Computer Village Corridor, Ikeja, Lagos.</p>
                    <p className="text-slate-500">Pickups ready within 1 hour after phone confirmation.</p>
                  </div>
                )}
              </div>

              {/* Special instructions */}
              <div>
                <label className="block font-bold text-slate-700 text-xs mb-1">Order Notes (Optional)</label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Call before arrival, deliver before 3pm"
                  className="w-full p-2.5 rounded-lg border border-slate-300 text-xs outline-none"
                />
              </div>

            </div>

            {/* Right: Order Summary & Phone Confirmation Policy */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Order Summary */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                  Order Summary
                </h3>

                <div className="max-h-48 overflow-y-auto space-y-2 pr-1 divide-y divide-slate-200 text-xs">
                  {items.map((item, idx) => (
                    <div key={idx} className="pt-2 flex justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-800 truncate">{item.product.name}</p>
                        <p className="text-[11px] text-slate-500">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-semibold text-slate-800 flex-shrink-0">
                        {formatNaira(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal:</span>
                    <span className="font-bold text-slate-900">{formatNaira(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery ({deliveryMethod === 'Pickup' ? 'Pickup' : city}):</span>
                    <span className="font-bold text-slate-900">
                      {deliveryFee === 0 ? 'FREE' : formatNaira(deliveryFee)}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                    <span>Total Amount:</span>
                    <span className="text-blue-600">{formatNaira(total)}</span>
                  </div>
                </div>
              </div>

              {/* PAYMENT SECTION: Phone Confirmation as specified */}
              <div className="p-4 rounded-xl bg-blue-900 text-white space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span>Payment Section: Phone Confirmation</span>
                </div>

                <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                  "After submitting your order, call 0810 158 1209 to confirm availability and payment."
                </p>

                <p className="text-[11px] text-blue-200 leading-relaxed">
                  We verify stock on hand in our Lagos warehouse and dispatch your sealed package directly with an insured courier.
                </p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="submit-order-checkout-btn"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg hover:shadow-blue-600/25 transform active:scale-95"
              >
                SUBMIT ORDER & GET CALL-IN CODE
              </button>

              <div className="text-center">
                <a
                  href={PHONE_TEL}
                  className="text-xs text-blue-600 hover:underline font-bold"
                >
                  Or Call {PHONE_DISPLAY} right now to order directly
                </a>
              </div>

            </div>

          </div>

        </form>
      </div>
    </div>
  );
};
