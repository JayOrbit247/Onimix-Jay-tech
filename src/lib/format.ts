import { CartItem } from '../types';

export const PHONE_NUMBER = '08101581209';
export const PHONE_DISPLAY = '0810 158 1209';
export const PHONE_INTL = '+234 810 158 1209';
export const PHONE_TEL = 'tel:+2348101581209';
export const WHATSAPP_BASE = 'https://wa.me/2348101581209';

export function formatNaira(amount: number): string {
  return '₦' + amount.toLocaleString('en-NG');
}

export function createProductWhatsAppUrl(
  productName: string,
  quantity: number = 1,
  price: number,
  variant?: string
): string {
  const variantText = variant ? ` (${variant})` : '';
  const message = `Hello Onimix jay Tech Lagos, I would like to order:

${productName}${variantText}
Quantity: ${quantity}
Price: ${formatNaira(price * quantity)}

Please confirm availability and delivery.`;

  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export function createCartWhatsAppUrl(
  items: CartItem[],
  subtotal: number,
  deliveryFee: number,
  deliveryLocation: string = 'Lagos'
): string {
  const itemLines = items
    .map((item, idx) => {
      const variant = [item.selectedColor, item.selectedStorage].filter(Boolean).join(', ');
      const variantText = variant ? ` [${variant}]` : '';
      return `${idx + 1}. ${item.product.name}${variantText} x${item.quantity} - ${formatNaira(item.product.price * item.quantity)}`;
    })
    .join('\n');

  const total = subtotal + deliveryFee;

  const message = `Hello Onimix jay Tech Lagos, I would like to place an order for delivery to ${deliveryLocation}:

${itemLines}

Subtotal: ${formatNaira(subtotal)}
Delivery Fee (${deliveryLocation}): ${formatNaira(deliveryFee)}
Total Order: ${formatNaira(total)}

Please confirm order availability and arrange dispatch.`;

  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}
