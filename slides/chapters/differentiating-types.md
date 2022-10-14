---
layout: section
---

## Differentiating Types

---
layout: two-cols-header
hideInToc: true
---

### Differentiating values

TypeScript can infer values via control flow analysis and allow or disallow certain operations at specific points within the code.

::left::

```ts
export type Person = {
  firstName: string;
  lastName: string;
  address?: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

```

::right::

```ts
function showPersonDetails(person: Person): void {
  const { firstName, lastName, address } = person;

  console.log(`First name: ${firstName}`);
  console.log(`Last name: ${lastName}`);

  if (address) {
    const { house, street, postcode,
    city } = address;

    console.log(`House: ${house}`);
    console.log(`Street: ${street}`);
    console.log(`Postcode: ${postcode}`);
    console.log(`City: ${city}`);
  }
}

```

---
layout: two-cols-header
hideInToc: true
---

### Differentiating custom types

TypeScript can narrow down types similar to values via control flow analysis and.

::left::

```ts
export type Person = {
  firstName: string;
  lastName: string;
};

export type PersonWithAddress = Person & {
  address: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

export type People = Person | PersonWithAddress;

```

::right::

```ts
function showPersonDetails(
  person: Person | PersonWithAddress): void {
  const { firstName, lastName } = person;

  console.log(`First name: ${firstName}`);
  console.log(`Last name: ${lastName}`);

  // in-operator narrows down union types
  if ('address' in person) {
    // PersonWithAddress
    const type = person;
    const { house, street, postcode, city } = person
    .address;

    console.log(`House: ${house}`);
    console.log(`Street: ${street}`);
    console.log(`Postcode: ${postcode}`);
    console.log(`City: ${city}`);
  }
}

```

---
layout: two-cols-header
hideInToc: true
---

### Discriminated unions

Discriminate unions are a way to narrow down union types by using a single field called `discriminant property`.

::left::

```ts
export type AnimalSound = 'Meow' | 'Woof';

export type Cat = {
  type: 'Cat';
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};

export type Dog = {
  type: 'Dog';
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};

export type Animal = Cat | Dog;

export type AnimalList = [Animal, Animal]; // Tuple

```

::right::

```ts
function showAnimalDetails(animal: Animal): void {
  const { type, name, sound } = animal;

  console.log(name);
  console.log(sound);

  if (type === 'Cat') {
    console.log(animal.isCurrentChiefMouser);

    return;
  }

  console.log(animal.canBeMistakenForAPony);
}

```

<!-- Loading/Error/Success pattern -->

---

## Type predicates & Type guards

Todo

```ts
export function isCustomerWithDefaultedPayments(customer: Customer): customer is CustomerWithDefaultedPayments {
  const { hasDefaultedPayments } = customer;

  return hasDefaultedPayments;
}

export function isCustomerWithMissedPayments(customer: Customer): customer is CustomerWithMissedPayments {
  const { hasDefaultedPayments, hasMissedPayments } = customer;

  if (hasDefaultedPayments) {
    return false;
  }

  return hasMissedPayments;
}

export function isCustomerRegular(customer: Customer): customer is CustomerRegular {
  const { hasDefaultedPayments, hasMissedPayments } = customer;

  return !hasDefaultedPayments && !hasMissedPayments;
}

```
