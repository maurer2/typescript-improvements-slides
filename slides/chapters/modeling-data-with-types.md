---
layout: section
---

## Modeling data with types

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

Pick and Omit can also be used when narrowing down the type of certain fields, by removing the fields first and then adding them again with a different, e.g. narrower type. This is useful when working with JSON files.

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

---

Todo: slide mismatching types in intersection types vs interface

---
layout: two-cols-header-with-gap
---

Union types in TypeScript can be used to allow a set of different types for a field. While often used as string unions, union types are not restricted to primitives.
Union types are also used with objects, to define objects with common fields.

::left::

```ts
type CurrencyNames = 'Pound' | 'Euro' | 'Dollar'
  | 'Canadian Dollar' | 'Australian Dollar';

type CurrencySymbols = '£' | '€' | '$';

export type Currencies = {
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

Mapped types

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

---

Data

```ts
import { Person, PersonList } from './types';
import { faker } from '@faker-js/faker';

export const people: Person[] = Array.from({ length: 5 }, () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  isPrimeMinister: false,
}));

export const peopleList: PersonList = people.map((person) => ({
  ...person,
  id: faker.datatype.uuid(),
  numberOfCats: faker.datatype.number({ min: 0, max: 50, precision: 1 }),
}));
```

---

Script

```ts
function sorted(list: PersonList, sortBy: PersonListFields): PersonList {
  const sortedList = [...list].sort((entryA, entryB) => {
    const fieldA = entryA[sortBy];
    const fieldB = entryB[sortBy];

    if (fieldA > fieldB) return 1;
    if (fieldA < fieldB) return -1;
    return 0;
  });
  return sortedList;
}

function sayIt(list: PersonList): void {
  const listAsString: string[] = list.map((entry) => Object.values(entry).join(' | '));
  console.log(listAsString);
}

const peopleListSortedByNumberOfCats: PersonList = sorted(peopleList, 'numberOfCats');
const peopleListSortedByFirstName: PersonList = sorted(peopleList, 'firstName');

sayIt(peopleListSortedByNumberOfCats);
sayIt(peopleListSortedByFirstName);
```
