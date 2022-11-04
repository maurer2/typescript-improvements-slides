---
layout: section
---

## React and TSX

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Deprecate props

TypeScript's `never` type can be used to hard deprecate component props. This is most useful for library or styleguide maintainers.
Trying to use the deprecated prop, will result in a type error. Alternatively a soft deprecation can be achieved by using the JSDoc deprecated tag, e.g. `@deprecated Please use x instead`.

```ts
type CustomButtonProps = PropsWithChildren<
  Partial<Pick<HTMLButtonElement,
    'autofocus'| 'ariaDisabled'>
  > & {
    onClick: (event: MouseEvent<
      HTMLButtonElement
    >) => void,
    oldProp?: never, // is deprecated
    newProp: string,
  }
>;
```

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

```ts
function CustomButton({children, onClick,
  newProp }: CustomButtonProps):
  ReactElement {
  return (
    <button type="button" onClick={onClick}
      data-testid={newProp}
    >
      {children}
    </button>
  );
}

function App() {
  function handleClick(): void {
    console.log('Click');
  }

  return (
    <CustomButton
      onClick={handleClick}
      newProp="test"
      // oldProp="test" // error
    >
      Button
    </CustomButton>
  );
}

```

---

### Disallow prop combinations

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

type ButtonLinkProps = ButtonLinkCommonProps & (ButtonLinkButtonProps | ButtonLinkLinkProps);
```

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Prohibit child components

TypeScript's `never` type can also be used to prevent child components. This is useful for library authors to prevent composition and use a component as is.

App

```ts
function App(): ReactElement {
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
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

Component with children

```ts
import { PropsWithChildren } from 'react';

type ChildProps = PropsWithChildren<{
  otherProp: string;
}>;
```

Component without children

```ts
type ChildlessProps = {
  children?: never;
  otherProp: string;
};
```
