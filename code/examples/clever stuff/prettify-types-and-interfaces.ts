// https://www.totaltypescript.com/concepts/the-prettify-helper
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

// types taken from code/examples/data-modeling/example1
export type CustomerDefaultFields1 = {
  id: string;
  firstName: string;
  lastName: string;
};
export type CustomerAddress1 = {
  house: string;
  street: string;
  city: string;
  postcode: string;
};
export type Customer1 = CustomerDefaultFields1 & CustomerAddress1;
export type Customer1Prettified = Prettify<CustomerDefaultFields1 & CustomerAddress1>;

// interfaces taken from code/examples/data-modeling/example1-interfaces
export interface CustomerDefaultFields2 {
  id: string;
  firstName: string;
  lastName: string;
}

export interface CustomerAddress2 {
  house: string;
  street: string;
  city: string;
  postcode: string;
}

export interface Customer2 extends CustomerDefaultFields2, CustomerAddress2 {};
export type Customer2Prettified = Prettify<Customer2>;
