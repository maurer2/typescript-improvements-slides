import type { PaymentCategories } from '../../types/payment';

export type HomeProps = {
  isHome: boolean;
};

// export type PaymentCategoryCounts = [countRegular: number, countMissed: number, countDefaulted: number];
export type PaymentCategoryCounts = Record<PaymentCategories, number>;

export type ActivePaymentFiltersState = PaymentCategories[];

export const paymentCategoriesFilterActionTypes = {
  TOGGLE_FILTER: 'TOGGLE_FILTER',
} as const;

export type PaymentCategoriesFiltersActionTypes = keyof typeof paymentCategoriesFilterActionTypes;

export type PaymentCategoriesActions = {
  type: PaymentCategoriesFiltersActionTypes;
  payload: PaymentCategories;
};

export const { TOGGLE_FILTER } = paymentCategoriesFilterActionTypes;
