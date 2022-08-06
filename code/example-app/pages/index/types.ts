import type { PaymentCategories } from '../../types/payment';

export type HomeProps = {
  isHome: boolean;
};

export type ActivePaymentState = ReadonlyArray<PaymentCategories>;

export const paymentCategoriesActionTypes = {
  TOGGLE_ACTION_TYPE: 'TOGGLE_ACTION_TYPE',
} as const;

export type PaymentCategoriesActionTypes = keyof typeof paymentCategoriesActionTypes;

export type PaymentCategoriesActions = {
  type: PaymentCategoriesActionTypes;
  payload: PaymentCategories;
};

export const { TOGGLE_ACTION_TYPE } = paymentCategoriesActionTypes;
