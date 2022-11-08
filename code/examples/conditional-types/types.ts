export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postCode: string;
  defaultedPayments: number;
  missedPayments: number;
};

// export type CustomerWithUppercaseValues = {
//   readonly [K in keyof Customer]?: Customer[K] extends string
//     ? Uppercase<Customer[K]>
//     : Customer[K];
// };

export type WithUppercaseValues<T> = {
  readonly [K in keyof T]?: T[K] extends string
    ? Uppercase<T[K]>
    : T[K];
};
