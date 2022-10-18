---
layout: section
---

## Modeling types

---
layout: two-cols-header-with-gap
---

TypesScript provides a very powerful type system to model types that can be used to model parameters, return values, json files etc.

::left::

Example payload from an API-endpoint

```json
[
  {
    "id": "B122",
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "house": "221B",
    "street": "Baker Street",
    "city": "London",
    "postcode": "NW16XE",
    "defaultedPayments": 1,
    "missedPayments": 50
  }
]
```

::right::

Corresponding type

```ts
type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
  defaultedPayments: number;
  missedPayments: number;
};

type CustomerList = Customer[];
```

---
layout: two-cols-header-with-gap
---

With TypeScript it is possible to split up types into logic units and composite new types from other types via Intersection types or via inheritance.

::left::

```ts
type CustomerDefaultFields = {
  id: string;
  firstName: string;
  lastName: string;
};
type CustomerAddress = {
  house: string;
  street: string;
  city: string;
  postcode: string;
};
type CustomerPaymentStatus = {
  defaultedPayments: number;
  missedPayments: number;
};
type Customer =
  & CustomerDefaultFields
  & CustomerAddress;
type CustomerWithPaymentData =
  & CustomerDefaultFields
  & CustomerAddress
  & CustomerPaymentStatus;
```

::right::

```ts
interface CustomerDefaultFields {
  id: string;
  firstName: string;
  lastName: string;
}
interface CustomerAddress {
  house: string;
  street: string;
  city: string;
  postcode: string;
}
interface CustomerPaymentStatus {
  defaultedPayments: number;
  missedPayments: number;
}
interface Customer extends
  CustomerDefaultFields,
  CustomerAddress {}
interface CustomerWithPaymentData extends
  CustomerDefaultFields,
  CustomerAddress,
  CustomerPaymentStatus {}
```

---
layout: two-cols-header-with-gap
---

Types can also be created by including and excluding certain fields from a complex base type via [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html). Pick is used to choose specific fields that are included into a new type. Omit specifies the fields, that are to be excluded from the new type.

::left::

```ts
type CustomerFields = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
  defaultedPayments: number;
  missedPayments: number;
};
type Customer = Pick<CustomerFields,
  'id' | 'firstName' | 'lastName' | 'house' |
  'street' | 'city' | 'postcode' |
  'defaultedPayments' | 'missedPayments'
>;
type Customer2 = Omit<CustomerFields, 'otherField'>;
```

::right::

```ts
interface CustomerFields {
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
}
interface Customer extends Pick<CustomerFields,
  'id' | 'firstName' | 'lastName' | 'house' |
  'street' | 'city' | 'postcode' |
  'defaultedPayments' | 'missedPayments'
> {}
interface Customer2 extends Omit<CustomerFields,
  'otherField'
> {}
```

---

Pick and Omit can also be used when narrowing the type of certain fields, by removing the fields first and then adding them again with a different, e.g. narrower type. This comes in handy when working with JSON files.

```ts
import currency from 'currency.js';

type LoanLooselyTyped = {
  id: string;
  title: string;
  tranche: string;
  available_amount: string;
  annualised_return: string;
  term_remaining: string;
  ltv: number;
  loan_value: string;
};

type Loan = Omit<LoanLooselyTyped,
  'available_amount' | 'annualised_return' | 'term_remaining' | 'ltv' | 'loan_value'
> & {
  available_amount: currency;
  annualised_return: currency;
  term_remaining: Date;
  ltv: BigInt;
  loan_value: currency;
};
```

<!-- Todo: slide mismatching types in intersection types vs interface -->

---
layout: two-cols-header-with-gap
---

Union types in TypeScript can be used to allow a set of different values for a type. While often used as string unions, union types are not restricted to primitives.
They are also used with objects, that have common fields.

::left::

```ts
type CurrencyNames = 'Pound' | 'Euro' | 'Dollar'
  | 'Canadian Dollar' | 'Australian Dollar';

type CurrencySymbols = '£' | '€' | '$';

type Currencies = {
  GBP: {
    name: CurrencyNames;
    symbol: CurrencySymbols;
  };
  EUR: {
    name: CurrencyNames;
    symbol: CurrencySymbols;
  };
}
```

::right::

```ts
const currencies: Currencies = {
  GBP: {
    name: 'Pound',
    symbol: '£',
  },
  EUR: {
    name: 'Euro',
    symbol: '€',
  },
};

```

---
layout: two-cols-header-with-gap
---

Mapped types can be used to iterate over fields of one or more types to create a new type. It helps with keeping the type declarations DRY.

::left::

```ts
type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD'
  | 'CAD' | 'AUD';

type CurrencyNames = 'Pound' | 'Euro' | 'Dollar'
  | 'Canadian Dollar' | 'Australian Dollar';

type CurrencySymbols = '£' | '€' | '$';

type Currencies = {
  [K in CurrencyAbbreviations]?: {
    name: CurrencyNames;
    symbol: CurrencySymbols;
  };
};

// Alternative using Record and Partial
type CurrenciesAlternative = Partial<Record<
  CurrencyAbbreviations, {
    name: CurrencyNames;
    symbol: CurrencySymbols;
  }
>>;
```

::right::

```ts
const currencies: Currencies = {
  GBP: {
    name: 'Pound',
    symbol: '£',
  },
  EUR: {
    name: 'Euro',
    symbol: '€',
  },
};
```

---
layout: two-cols-header-with-gap
---

Since mapped types provide the current type within the map function, a type lookup can be performed, where the current type acts as the key, similar to looking up values in an object.

::left::

```ts
type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD'
  | 'CAD' | 'AUD';
type CurrencyNames = {
  GBP: 'Pound' | 'Pound Sterling';
  EUR: 'Euro';
  USD: 'Dollar' | 'US Dollar';
  CAD: 'Canadian Dollar';
  AUD: 'Australian Dollar' | 'Dollarydoos';
};
type CurrencySymbols = {
  GBP: '£';
  EUR: '€';
  USD: '$';
  CAD: '$';
  AUD: '$';
};
type Currencies = {
  [K in CurrencyAbbreviations]?: [
    name: CurrencyNames[K],
    symbol: CurrencySymbols[K],
  ];
};
```

::right::

```ts
const currencies: Currencies = {
  EUR: ['Euro', '€'],
  GBP: ['Pound', '£'],
  USD: ['Dollar', '$'],
  CAD: ['Canadian Dollar', '$'],
  AUD: ['Dollarydoos', '$'],
  // CAD: ['Euro', '$'], // Error
  // GBP: ['Pound Sterling', '$'], // Error
};
```