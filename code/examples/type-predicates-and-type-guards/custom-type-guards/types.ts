// types
type CustomerFieldsBag = {
  id: string;
  firstName: string;
  lastName: string;
  defaultedPayments: number;
  missedPayments: number;
  hasDefaultedPayments: boolean;
  hasMissedPayments: boolean;
  house: string;
  street: string;
  city: string;
  postcode: string;
};

export type CustomerBasicDetails = Pick<CustomerFieldsBag, 'id' | 'firstName' | 'lastName'>;

export type CustomerPaymentDetails = Pick<CustomerFieldsBag, 'missedPayments' | 'defaultedPayments'>;

export type CustomerWithDefaultedPayments = CustomerBasicDetails &
  CustomerPaymentDetails & {
    hasDefaultedPayments: true;
    hasMissedPayments: boolean;
  };

export type CustomerWithMissedPayments = CustomerBasicDetails &
  CustomerPaymentDetails & {
    hasDefaultedPayments: false;
    hasMissedPayments: true;
  };

export type CustomerRegular = CustomerBasicDetails &
  CustomerPaymentDetails & {
    hasDefaultedPayments: false;
    hasMissedPayments: false;
  };

export type Customer = CustomerWithMissedPayments | CustomerWithDefaultedPayments | CustomerRegular;

// type guards
export function isCustomerWithDefaultedPayments(customer: Customer): customer is CustomerWithDefaultedPayments {
  const { hasDefaultedPayments } = customer;

  return hasDefaultedPayments;
}

export function isCustomerWithMissedPayments(customer: Customer): customer is CustomerWithMissedPayments {
  const { hasDefaultedPayments, hasMissedPayments } = customer;

  if (hasDefaultedPayments) {
    return false;
  }

  return hasMissedPayments;
}

export function isCustomerRegular(customer: Customer): customer is CustomerRegular {
  const { hasDefaultedPayments, hasMissedPayments } = customer;

  return !hasDefaultedPayments && !hasMissedPayments;
}
