---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
css: unocss
---

# A few slides on TypeScript

---
layout: image-right
image: https://placekitten.com/1000/1000
---

## Structural typing

Structural typing means that types with the same structure are treated as compatible regardless of name.
TypeScript uses structural typing exclusively.
<!-- Flow uses structural typings for all non class-related types. -->

```ts
type MacBook = {
  colour: string;
}
type Animal = {
  colour: string;
  // canBeInARoom: boolean;
}
const macBookPro: MacBook = {
  colour: 'gray';
}
const elephant: Animal = {
  colour: 'gray',
}
const listOfMacBooks: MacBook[] = [
  macBookPro,
  elephant, // no error
]
```

---


## Nominal typing

Nominal typing means that types are compatible if they have the same name or are declared as subtypes.
More commonly used in mainstream OOP languages like Java. Flow uses nominal typing for class-related types.

Classes

```java
public interface IMacBookAnimal {}
public record MacBook(String colour) implements IMacBookAnimal {}
public record Animal(String colour) implements IMacBookAnimal {}
```

Program

```java
import java.util.Arrays;
import java.util.List;

public class NominalTypingExample {
  public static void main(String[] args) {
    var macBookPro = new MacBook("gray");
    var elephant = new Animal("gray");
    // List<MacBook> listOfMacBooks = Arrays.asList(macBookPro, elephant); // error
    List<IMacBookAnimal> listOfMacBooks = Arrays.asList(macBookPro, elephant); // no error
  }
}
```

---

## Restrict values for types

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

## Model and derive types for contracts

Base type, Derived types, Helper functions (Pick, Omit)

---

## Discriminated union types

Loading/Error/Success pattern

---

## Leverage built in types

ReadonlyArray, Tuples, Record,

---

## Prohibit props combinations and child components

Todo
---

## Create own helper types

Number without 0 for percent calculations

