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

TypeScript's `never` type can also be used to prohibit certain combination of props. The syntax gets a bit complex for certain type of props, e.g. boolean as those can either be set to false or not not passed at all.

Components

```ts
function ButtonLink({ onClick, type, disabled, href }: ButtonLinkProps) {
  const TagType = type; // either a or button
  // discriminated union
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
      Click
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

