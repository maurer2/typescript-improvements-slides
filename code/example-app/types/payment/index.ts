import { paymentCategories } from './const';

export type PaymentCategories = typeof paymentCategories[number];

export type PaymentCategoryName = Record<PaymentCategories, string>;
