---
layout: section
---

## Using types

---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating values in types

TypeScript can infer values via control flow analysis and may allow or disallow certain operations on members of a type.
For example optional values can only be accessed after checking if they are defined.

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
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating multiple types

TypeScript can also narrow down multiple types via control flow analysis. Checking types directly in the code doesn't work, as types are removed during compilation (type erasure).

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
function showPersonDetails(
  person: Person | PersonWithAddress): void {
  const { firstName, lastName } = person;

  console.log(`First name: ${firstName}`);
  console.log(`Last name: ${lastName}`);

  if ('address' in person) {
    // PersonWithAddress
    const type = person;
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

### Discriminated unions in the real world

Since TypeScript is able to narrow down a union type via a discriminant property, discriminant unions are widely used for type checking in conditionals to ensure type safety and for dealing with API-requests.

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

### Discriminated unions in the real world (part 2)

Discriminant unions also work with Generics to make Code more flexible.

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
      return;
    }
    case 'failed': {
      const { state, statusCode, errorMessage }
      = requestStatus;
      return;
    }
    case 'success': {
      const { state, statusCode, data }
      = requestStatus;
      return;
    }
    default: {}
  }
}
sendAPIRequest<Cat>();
```

---

### Type predicates & Type guards

Todo

```ts
function isCustomerWithDefaultedPayments(customer: Customer): customer is CustomerWithDefaultedPayments {
  const { hasDefaultedPayments } = customer;

  return hasDefaultedPayments;
}

function isCustomerWithMissedPayments(customer: Customer): customer is CustomerWithMissedPayments {
  const { hasDefaultedPayments, hasMissedPayments } = customer;

  if (hasDefaultedPayments) {
    return false;
  }

  return hasMissedPayments;
}

function isCustomerRegular(customer: Customer): customer is CustomerRegular {
  const { hasDefaultedPayments, hasMissedPayments } = customer;

  return !hasDefaultedPayments && !hasMissedPayments;
}
```
