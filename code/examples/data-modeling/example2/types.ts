export type CustomerFields = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
  defaultedPayments: number;
  missedPayments: number;
  otherField: never;
};

// all fields
export type Customer = Pick<
  CustomerFields,
  'id' | 'firstName' | 'lastName' | 'house' | 'street' | 'city' | 'postcode' | 'defaultedPayments' | 'missedPayments'
>;
export type Customer2 = Omit<CustomerFields, 'otherField'>;

export type CustomerWithPaymentData = Pick<
  CustomerFields,
  'id' | 'firstName' | 'lastName' | 'defaultedPayments' | 'missedPayments'
>;
export type CustomerWithPaymentData2 = Omit<CustomerFields, 'house' | 'street' | 'city' | 'postcode' | 'otherField'>;
