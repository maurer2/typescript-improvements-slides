---
layout: image-right
image: https://placekitten.com/1000/1000
---

## Type modeling

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

## Deprecate props

TypeScript's `never` type can be used to hard deprecate component props. This is most useful for library or styleguide maintainers.
Trying to use the deprecated prop, will result in a type error. Alternatively a soft deprecation can be achieved by using the JSDoc deprecated tag, e.g. `@deprecated Please use x instead`.

Props

```ts
export type CustomButtonProps = Partial<Pick<HTMLButtonElement, 'autofocus' | 'ariaDisabled'>> &
{
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void,
  oldProp?: never, // is deprecated
  newProp: string,
};
```

---

```ts
import React, { PropsWithChildren } from 'react';
import { CustomButtonProps } from './library';

function CustomButton({ children, onClick, newProp }: PropsWithChildren<CustomButtonProps>) {
  return (
    <button type="button" onClick={onClick} data-testid={newProp}>
      {children}
    </button>
  );
}

export default function App() {
  function handleClick(): void {}

  return (
    <CustomButton
      onClick={() => handleClick()}
      newProp="test"
      // oldProp="test" // error
    >
      Button
    </CustomButton>
  );
}
```

---

## Disallow prop combinations

TypeScript's `never` type can also be used to prohibit certain combination of props.
The syntax can get a bit complex for certain type of props, e.g. `boolean` as those type of props can either be set to false or not passed at all.

Component

```ts
function ButtonLink({ onClick, type, disabled, href, children }: PropsWithChildren<ButtonLinkProps>) {
  const TagType = type; // either a or button
  if (type === 'button') {
    console.log(href); // undefined
    console.log(disabled);
  }
  if (type === 'a') {
    console.log(href); // string
    console.log(disabled);
  }
  return (
    <TagType className={style.ButtonLink} onClick={onClick}>
      {children}
    </TagType>
  );
}
export default ButtonLink;
```

---

We use the type field to distinguish between various types and allow TypeScript to narrow down the type.

Props

```ts
type ButtonLinkCommonProps = {
  onClick: (() => void);
}

type ButtonLinkButtonProps = {
  type: 'button';
  disabled?: boolean;
  href?: never; // button should never have a href attribute
}

type ButtonLinkLinkProps = {
  type: 'a';
  disabled?: false; // link should never have a disabled attribute
  href: string;
}

export type ButtonLinkProps = ButtonLinkCommonProps & (ButtonLinkButtonProps | ButtonLinkLinkProps);
```

---
layout: image-right
image: https://placekitten.com/1000/1000
---

## Prohibit child components

TypeScript's `never` type can also be used to prevent child components. This is useful for library authors to prevent composition and use a component as is.

App

```ts
import Child from './Child';
import Childless from './Childless';

function App() {
  return (
    <div className="wrapper">
      <h1>Restrict child elements</h1>
      <Child>
        <h2>Can have child content</h2>
      </Child>
      <Childless />
    </div>
  );
}
```

---
layout: image-left
image: https://placekitten.com/1000/1000
---

Component with children

```ts
import { PropsWithChildren } from 'react';

export type ChildProps = PropsWithChildren<{
  // same as PropsWithChildren<>
  // children?: ReactNode | undefined;
  otherProp: string;
}>;


```

Component without children

```ts
export type ChildlessProps = {
  children?: never;
  otherProp: string;
};

```
