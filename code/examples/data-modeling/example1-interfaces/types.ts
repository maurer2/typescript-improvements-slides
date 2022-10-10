export interface CustomerDefaultFields {
  id: string;
  firstName: string;
  lastName: string;
}

export interface CustomerAddress {
  house: string;
  street: string;
  city: string;
  postcode: string;
}

export interface CustomerPaymentStatus {
  defaultedPayments: number;
  missedPayments: number;
}

export interface Customer extends CustomerDefaultFields, CustomerAddress {}

export interface CustomerWithPaymentData extends CustomerDefaultFields, CustomerAddress, CustomerPaymentStatus {}
