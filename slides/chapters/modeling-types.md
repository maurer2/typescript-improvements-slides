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
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

When using types it is possible to split them up into logical units and composite new types from other types via **Intersection types**.

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
type Customer = CustomerDefaultFields
  & CustomerAddress;
type CustomerWithPaymentData =
  & CustomerDefaultFields
  & CustomerPaymentStatus;
```

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

The same result can be achieved via `extend` when using interfaces.

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
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

Types can also be created by including or excluding certain fields from a complex base type via **Pick** or **Omit**.
<!-- Pick is used to select fields that are included in the new type. Omit specifies the fields that are to be excluded from the new type. -->

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
  'id' | 'firstName' | 'lastName' |
  'house' | 'street' | 'city' | 'postcode'
>;
type Customer2 = Omit<CustomerFields,
  'defaultedPayments' | 'missedPayments'
>;
```

---

Pick and Omit can also be used when changing the type of certain fields, by removing the fields first and then adding them again with a different, e.g. narrower type. This comes in handy when working with JSON files.

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

**Union types** can be used to allow a set of different values for a type. While often used as string unions, union types are not restricted to primitives.
They are also used with objects that have common fields.

::left::

```ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo' | 'Oink';

type Cat = {
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};

type Dog = {
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};

type Cow = {
  name: string;
  sound: AnimalSound;
};

type Animal = Cat | Dog | Cow;

type AnimalList = Animal[];
```

::right::

```ts
const cat: Cat = {
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
};

const dog: Dog = {
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};

const cow: Cow = {
  name: 'Gertie',
  sound: 'Meow', // no error
};

const animals: AnimalList = [cat, dog, cow];
```

---
layout: two-cols-header-with-gap
---

When union types share a common field, that field can be used to automatically differentiate between members of the union type. They are called
**Discriminated unions**. The shared field is called **discriminant property**.

::left::

```ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo' | 'Oink';

type Cat = {
  type: 'Cat'; // discriminant property
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};

type Dog = {
  type: 'Dog';
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};

type Animal = Cat | Dog;
```

::right::

```ts
const cat: Animal = { // TS narrows it down to Cat
  type: 'Cat',
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
  // canBeMistakenForAPony: true,
  // Error ('canBeMistakenForAPony' does not exist
  // in type 'Cat')
};

const dog: Animal = {
  type: 'Dog',
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};

```

---
layout: two-cols-header-with-gap
---

Mapped types can be used to iterate over fields of one or more types to create a new type. This is useful with keeping the type declarations DRY.

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

// Alternative approach using Record and Partial
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
