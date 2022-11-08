---
layout: section
---

## Using types

---
layout: two-cols-header-with-gap
hideInToc: true
---

### Single types and optional keys

TypeScript can infer values via control flow analysis and may allow or disallow access on members of a type.

::left::

```ts
type Person = {
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
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - manual

Narrowing down union types is slightly more complex since manually checking the type isn't possible as types are removed during compilation (type erasure).

::left::

```ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo'|
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
```

::right::

```ts
function showAnimalDetails(animal: Animal): void {
  console.log(`Name: ${animal.name}`);
  console.log(`Sound: ${animal.sound}`);

  if (Object.hasOwn(animal,
    'isCurrentChiefMouser')) {
    const { isCurrentChiefMouser } = animal as Cat
    console.log(isCurrentChiefMouser);
    return;
  }

  if (Object.hasOwn(animal,
    'canBeMistakenForAPony')) {
    const { canBeMistakenForAPony } = animal as Dog
    console.log(canBeMistakenForAPony);
    return;
  }

  // Cow stuff
}
```

---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - via type guards

TypeScript can narrow down multiple types in an union type via built-in type guards. Most common type guards are: `in`, `typeof` and `instanceof`.

::left::

```ts
type Person = {
  firstName: string;
  lastName: string;
};

type PersonWithAddress = Person & {
  address: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

type People = Person | PersonWithAddress;
```

::right::

```ts
function showPersonDetails(person: People): void {
  const { firstName, lastName } = person;

  console.log(`First name: ${firstName}`);
  console.log(`Last name: ${lastName}`);

  if ('address' in person) {
    // PersonWithAddress
    const { house, street, postcode, city } =
      person.address;

    console.log(`House: ${house}`);
    console.log(`Street: ${street}`);
    console.log(`Postcode: ${postcode}`);
    console.log(`City: ${city}`);
  }
}
```

---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - via discriminant union types

Since TypeScript is able to narrow down a discriminant union type via a discriminant property, discriminant unions are widely used to ensure type security.

::left::

```ts
type ActionNamesTypes = 'UPDATE_COUNTER' |
  'UPDATE_DATETIME';

type State = {
  counter: Counter;
  dateTime: DateTime;
};

type CounterAction = {
  type: Extract<ActionNamesTypes,'UPDATE_COUNTER'>
  payload: Counter;
};

type DateTimeAction = {
  type: Extract<ActionNamesTypes,'UPDATE_DATETIME'>
  payload: DateTime;
};

type Actions = CounterAction | DateTimeAction;
```

::right::

```ts
const reducers = (state: State = initialState,
  action: Actions): State => {
  switch (action.type) {
    case ActionNames.UPDATE_COUNTER: {
      return {
        ...state,
        counter: action.payload, // Counter
      };
    }
    case ActionNames.UPDATE_DATETIME: {
      return {
        ...state,
        dateTime: action.payload, // DateTime
      };
    }
    default:
      return {
        ...state,
      };
  }
};
```

---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - via discriminant union types with generics

Discriminant unions also work with generics to make code more reusable.

::left::

```ts
type Loading = {
  state: 'loading';
};
type Failed = {
  state: 'failed';
  statusCode: number;
  errorMessage?: string;
};
type Success<T> = {
  state: 'success';
  statusCode: number;
  data: T;
};

type APIRequestStatus<T> = Loading | Failed |
  Success<T>;

type Cat = {
  type: 'Cat';
  name: string;
};
```

::right::

```ts
async function sendAPIRequest<T>(): Promise<void> {
  const requestStatus = await getResponse<T>();
  switch (requestStatus.state) {
    case 'loading': {
      const { state } = requestStatus;
      console.log(state);
      return;
    }
    case 'failed': {
      const { errorMessage } = requestStatus;
      console.log(`${errorMessage
        ? errorMessage : '- no error message'}`);
      return;
    }
    case 'success': {
      const { data } = requestStatus;
      console.log(data);
      return;
    }
    default: {}
  }
}
```
