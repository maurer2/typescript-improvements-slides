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

export type CustomerOverview = Pick<
  CustomerFieldsBag,
  'id' | 'firstName' | 'lastName' | 'defaultedPayments' | 'missedPayments' | 'totalPayments'
>;

export type CustomerDetails = Pick<
  CustomerFieldsBag,
  'id' | 'firstName' | 'lastName' | 'age' | 'house' | 'street' | 'city' | 'postcode'
>;
