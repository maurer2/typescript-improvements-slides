export interface CustomerFields {
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
}

export interface Customer
  extends Pick<
    CustomerFields,
    'id' | 'firstName' | 'lastName' | 'house' | 'street' | 'city' | 'postcode' | 'defaultedPayments' | 'missedPayments'
  > {}

export interface Customer2 extends Omit<CustomerFields, 'otherField'> {}

export interface CustomerWithPaymentData
  extends Pick<CustomerFields, 'id' | 'firstName' | 'lastName' | 'defaultedPayments' | 'missedPayments'> {}

export interface CustomerWithPaymentData2
  extends Omit<CustomerFields, 'house' | 'street' | 'city' | 'postcode' | 'otherField'> {}
