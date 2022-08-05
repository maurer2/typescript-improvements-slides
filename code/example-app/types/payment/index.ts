export const paymentCategories = ['regular', 'missed', 'defaulted'] as const;
export type PaymentCategories = typeof paymentCategories[number];

export type PaymentCategoriesActions =
  | {
    type: 'TOGGLE_ACTION_TYPE';
    payload: 'regular';
  }
  | {
    type: 'TOGGLE_ACTION_TYPE';
    payload: 'missed';
  }
  | {
    type: 'TOGGLE_ACTION_TYPE';
    payload: 'defaulted';
  };

export type ActivePaymentState = ReadonlyArray<PaymentCategories>;
