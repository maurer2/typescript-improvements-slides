---
layout: section
---

## Type modeling

---
layout: image-right
image: https://placekitten.com/1000/1000
---

### Type modeling

TypesScript provides a multitude of options to model data types that can be used for business logic, props, json files etc.

Example data

```json
[
  {
    "id": "123456",
    "firstName": "Peter",
    "lastName": "Peterson",
    "house": "111",
    "street": "Highstreet",
    "city": "London",
    "postcode": "W1 6AA",
    "defaultedPayments": 1,
    "missedPayments": 50
  }
]
```

---
layout: image-left
image: https://placekitten.com/1000/1000
---

Composite types from other types

```ts
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
export type Customer =
  & CustomerDefaultFields
  & CustomerAddress
  & CustomerAddress
export type CustomerWithPaymentData =
  & CustomerDefaultFields
  & CustomerPaymentStatus
```

---

<!-- Composite types by including and excluding fields -->

Types can also be created by picking and omitting certain fields from a base type via [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html). Pick allows to choose specific fields that are used to create a new type, while omit specifies the fields, that are to be excluded from the new type.

```ts
export type CustomerFields = {
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
};
export type Customer = Pick<CustomerFields, 'id' | 'firstName' | 'lastName' | 'house' | 'street' | 'city' |
'postcode' | 'defaultedPayments' | 'missedPayments'
>;
export type Customer2 = Omit<CustomerFields, 'otherField'>;
export type CustomerWithPaymentData = Pick<CustomerFields, 'id' | 'firstName' | 'lastName' | 'defaultedPayments' | 'missedPayments'
>;
export type CustomerWithPaymentData2 = Omit<CustomerFields, 'house' | 'street' | 'city' | 'postcode' | 'otherField'>;
```

---

Pick and Omit can also be used to narrow down the type of a field, by removing the field first and then add it again with a narrower type. This is not strictly necessary, since fields override previous fields with the same name (just like in JavaScript), but it helps distinguishing types at a glance.

Example

```ts
export type LoanStringlyTyped = {
  id: string;
  title: string;
  tranche: string;
  available_amount: string;
  annualised_return: string;
  term_remaining: string;
  ltv: string;
  loan_value: string;
};

export type Loan = Omit<LoanStringlyTyped, 'available_amount' | 'annualised_return'
| 'loan_value' | 'term_remaining'> & {
  available_amount: currency,
  annualised_return: currency,
  loan_value: currency
  term_remaining: Date;
};

```

---

### Restrict values for types

Restricting possible values for types prevents accessing undefined or null values without having to resort to manual checks like `Object.hasOwn` or `[].includes`, which helps with readability. Furthermore it makes one's IDE to only show applicable values.

Types

```ts
export type Person = {
  firstName: string,
  lastName: string,
  isPrimeMinister: boolean,
}

export type PersonList = ReadonlyArray<Pick<Person, 'firstName' | 'lastName'> & {
  id: string,
  numberOfCats: number,
}>

export type PersonListFields = keyof PersonList[number]; // firstName | lastName | id | numberOfCats
```
