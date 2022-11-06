---
layout: section
---

## Modeling types

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Types & interfaces

In order to shape data, types and interfaces can be utilized. They can be used interchangeably in a lot of cases, but differ in syntax and mutability.
interfaces are mutable, while types are not. Unlike interfaces, types can also be used for primitives like number or string.

```ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}
```

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

Keys/members of types and interfaces can be accessed via bracket notation in other types and interfaces or when creating variables.
Type information of referenced types are preserved.

```ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};

const customerLastName:
  Customer1['lastName'] = 'Peter';

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}

const customerLastName2:
  Customer2['lastName'] = 'Peter';
```


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
type AnimalSound = 'Meow' | 'Woof' | 'Moo' |
  'Oink';

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

### Discriminated unions

When union types share a common field (usually a string), that field can be used to automatically differentiate members of the union type. They are called
**Discriminated unions**. The shared field is called **discriminant property**.

::left::

```ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo' |
  'Oink';

type Cat = {
  type: 'Cat'; // discriminant property
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};

type Dog = {
  type: 'Dog'; // discriminant property
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};

type Animal = Cat | Dog;
```

::right::

```ts
// TS narrows Animal down to Cat
const cat: Animal = {
  type: 'Cat',
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
  // canBeMistakenForAPony: false,
  // Error ('canBeMistakenForAPony' does not exist
  // in type 'Cat')
};

// TS narrows Animal down to Dog
const dog: Animal = {
  type: 'Dog',
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};
```

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Logical union type combinations

Union types can also be modeled in such a way, that unique logical combinations are created. TypeScript can use those to automatically differentiate members of the union type.

```ts
type DatePickerBase = {
  day: number;
  month: number;
  year: number;
};
type DatePickerRegular = {
  maxNumberOfDays?: number; // optional
  showTimePicker: boolean; // unique
};
type DatePickerDateOfBirthMode = {
  minAge?: number; // optional
  maxAge?: number; // optional
  showIAmOldEnoughBox: boolean; // unique
};
type DatePicker = DatePickerBase
  & (DatePickerRegular
    | DatePickerDateOfBirthMode);
```

---
layout: two-cols-header-with-gap
---

**Mapped types** can be used to iterate over fields of one or more types to create a new type. This is useful with keeping the type declarations DRY.

::left::

```ts
type CustomerTypeBackend = {
  id: string;
  first_name: string;
  last_name: string;
  defaulted_payments: number;
  missed_payments: number;
  // additional_field_1: number[];
}

type GlobalKeyMap = {
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

```

::right::

```ts
type CustomerTypeFrontendWithoutMismatchingData = {
  [K in keyof CustomerTypeBackend as
    GlobalKeyMap[K]]: CustomerTypeBackend[K]
}
```

Output:

```ts
type CustomerTypeFrontendWithoutMismatchingData = {
  id: string;
  firstName: string;
  lastName: string;
  defaultedPayments: number;
  missedPayments: number;
}

```

---

<div class="grid grid-cols-2 gap-4">
<div>

```ts
type CustomerTypeBackend = {
  id: string;
  first_name: string;
  last_name: string;
  defaulted_payments: number;
  missed_payments: number;
  additional_field_1: number[];
}
```

</div>
<div>

```ts
type GlobalKeyMap = {
  id: 'id',
  first_name: 'firstName',
  last_name: 'lastName',
  ...
  defaulted_payments: 'defaultedPayments',
  missed_payments: 'missedPayments',
  additionalField2: 'additional_field_2';
}
```

</div>
</div>

```ts
type CustomerTypeFrontend = {
  [K in keyof Pick<CustomerTypeBackend, Extract<keyof CustomerTypeBackend, keyof GlobalKeyMap>>
    as GlobalKeyMap[K]]: CustomerTypeBackend[K];
};
```

Output

```ts
type CustomerTypeFrontend = {
  id: string;
  firstName: string;
  lastName: string;
  defaultedPayments: number;
  missedPayments: number;
}

```

---
layout: two-cols-header-with-gap
---

Mapped types can also iterate over fields of multiple types to create new types.

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
