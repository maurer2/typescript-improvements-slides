import type { PaymentCategoryName } from './index';

export const paymentCategories = ['regular', 'missed', 'defaulted'] as const;

export const paymentCategoryNames: PaymentCategoryName = {
  regular: 'Regular Payments',
  missed: 'Missed Payments',
  defaulted: 'Defaulted Payments',
};
