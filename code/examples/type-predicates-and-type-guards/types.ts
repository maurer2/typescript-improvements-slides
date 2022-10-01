// types
type CustomerFieldsBag = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  missedPayments: number;
  defaultedPayments: number;
  totalPayments: number;
  house: string;
  street: string;
  city: string;
  postcode: string;
};

export type CustomerBasicDetails = Pick<CustomerFieldsBag, 'id' | 'firstName' | 'lastName'>;

export type CustomerPaymentDetails = Pick<CustomerFieldsBag, 'missedPayments' | 'defaultedPayments' | 'totalPayments'>;

export type CustomerWithMissedPayments = CustomerBasicDetails & CustomerPaymentDetails;

export type CustomerWithDefaultedPayments = CustomerBasicDetails & CustomerPaymentDetails;

export type CustomerRegular = CustomerBasicDetails & CustomerPaymentDetails;

export type Customer = CustomerWithMissedPayments | CustomerWithDefaultedPayments | CustomerRegular;

// type guards
export function isCustomerWithDefaultedPayments(customer: Customer): customer is CustomerWithDefaultedPayments {
  const { defaultedPayments } = customer;

  return Boolean(defaultedPayments);
}

export function isCustomerWithMissedPayments(customer: Customer): customer is CustomerWithMissedPayments {
  const { missedPayments, defaultedPayments } = customer;

  return !defaultedPayments && Boolean(missedPayments);
}

export function isCustomerRegular(customer: Customer): customer is CustomerRegular {
  const { missedPayments, defaultedPayments } = customer;

  return !defaultedPayments && !missedPayments;
}
