export type CustomerDefaultFields = {
  id: string;
  firstName: string;
  lastName: string;
};

export type CustomerAddress = {
  house: string;
  street: string;
  city: string;
  postcode: string;
};

export type CustomerPaymentStatus = {
  defaultedPayments: number;
  missedPayments: number;
};

export type Customer = CustomerDefaultFields & CustomerAddress;

export type CustomerWithPaymentData = CustomerDefaultFields & CustomerAddress & CustomerPaymentStatus;
