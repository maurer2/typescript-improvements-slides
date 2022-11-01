export type CustomerBackend = {
  id: string;
  first_name: string;
  last_name: string;
  house: string;
  street: string;
  city: string;
  post_code: string;
  defaulted_payments: number;
  missed_payments: number;
  additional_field_1: number[];
}

export type GlobalKeyMap1 = {
  id: 'id',
  firstName: 'first_name',
  lastName: 'last_name',
  house: 'house',
  street: 'street',
  city: 'city',
  postCode: 'post_code',
  defaultedPayments: 'defaulted_payments',
  missedPayments: 'missed_payments',
  additionalField2: 'additional_field_2';
}

export type GlobalKeyMap2 = {
  id: 'id',
  first_name: 'firstName',
  last_name: 'lastName',
  house: 'house',
  street: 'street',
  city: 'city',
  post_code: 'postCode',
  defaulted_payments: 'defaultedPayments',
  missed_payments: 'missedPayments',
  additionalField2: 'additional_field_2';
}

type CustomerFrontend1 = {
  [K in keyof GlobalKeyMap1]: GlobalKeyMap1[K] extends keyof CustomerBackend
    ? CustomerBackend[GlobalKeyMap1[K]]
    : never
}

type CustomerFrontend2 = {
  [K in keyof CustomerBackend]: GlobalKeyMap2[K] extends never ? never : CustomerBackend[K]
}

// contains additional_field_1
type CustomerFrontend3 = {
  [K in keyof CustomerBackend]: K extends keyof GlobalKeyMap2 ? CustomerBackend[K] : never
}

// https://mariusschulz.com/blog/the-omit-helper-type-in-typescript
type CustomKeys<T, K> = Pick<T, Extract<keyof T, K>>;
type Test = CustomKeys<CustomerBackend, keyof GlobalKeyMap2>

// does not contain additional_field_1
type CustomerFrontend4 = {
  [K in keyof Pick<CustomerBackend, Extract<keyof CustomerBackend, keyof GlobalKeyMap2>> as GlobalKeyMap2[K]]: CustomerBackend[K]
}
