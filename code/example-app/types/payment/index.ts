export const paymentCategories = ['regular', 'missed', 'defaulted'] as const;
export type PaymentCategories = typeof paymentCategories[number];
