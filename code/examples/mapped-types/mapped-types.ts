export type CustomerTypeBackend = {
  id: string;
  first_name: string;
  last_name: string;
  house: string;
  street: string;
  city: string;
  post_code: string;
  defaulted_payments: number;
  missed_payments: number;
  // additional_field_1: number[]; // Test field
};

// export type GlobalKeyMap1 = {
//   id: 'id',
//   firstName: 'first_name',
//   lastName: 'last_name',
//   house: 'house',
//   street: 'street',
//   city: 'city',
//   postCode: 'post_code',
//   defaultedPayments: 'defaulted_payments',
//   missedPayments: 'missed_payments',
//   additionalField2: 'additional_field_2';
// }

export type GlobalKeyMap = {
  id: 'id';
  first_name: 'firstName';
  last_name: 'lastName';
  house: 'house';
  street: 'street';
  city: 'city';
  post_code: 'postCode';
  defaulted_payments: 'defaultedPayments';
  missed_payments: 'missedPayments';
  additionalField2: 'additional_field_2'; // Test field
};

// contains additionalField2
// type CustomerFrontend1 = {
//   [K in keyof GlobalKeyMap1]: GlobalKeyMap1[K] extends keyof CustomerTypeBackend
//     ? CustomerTypeBackend[GlobalKeyMap1[K]]
//     : never
// }

// error since additional_field_1 is not in GlobalKeyMap
// type CustomerFrontend2 = {
//   [K in keyof CustomerTypeBackend]: GlobalKeyMap[K] extends never ? never : CustomerTypeBackend[K]
// }

// https://mariusschulz.com/blog/the-omit-helper-type-in-typescript
type CustomKeys<T, K> = Pick<T, Extract<keyof T, K>>;
type Test = CustomKeys<CustomerTypeBackend, keyof GlobalKeyMap>;

type CustomerTypeFrontend1 = {
  [K in keyof CustomerTypeBackend as GlobalKeyMap[K]]: CustomerTypeBackend[K];
};

type MatchingKeysInCustomerTypeBackendAndGlobalKeyMap = Pick<
  CustomerTypeBackend,
  Extract<keyof CustomerTypeBackend, keyof GlobalKeyMap>
>;
type CustomerTypeFrontend2 = {
  [K in keyof Pick<
    CustomerTypeBackend,
    Extract<keyof CustomerTypeBackend, keyof GlobalKeyMap>
  > as GlobalKeyMap[K]]: CustomerTypeBackend[K];
};
