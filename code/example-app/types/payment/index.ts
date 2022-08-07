export const paymentCategories = ['regular', 'missed', 'defaulted'] as const;

export type PaymentCategories = typeof paymentCategories[number];

export const paymentCategoryNames: Record<PaymentCategories, string> = {
  regular: 'Regular Payments',
  missed: 'Missed Payments',
  defaulted: 'Defaulted Payments',
};
