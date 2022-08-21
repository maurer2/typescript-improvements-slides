import type { PaymentCategoryName } from './index';

export const paymentCategories = ['missed', 'defaulted'] as const;

export const paymentCategoryNames: PaymentCategoryName = {
  missed: 'Missed Payments',
  defaulted: 'Defaulted Payments',
};
