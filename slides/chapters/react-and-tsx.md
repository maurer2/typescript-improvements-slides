---
layout: section
---

## React and TSX

---
layout: image-right
image: ./background.jpeg
---

### Deprecate props

TypeScript's `never` type can be used to deprecate component props. Trying to use the deprecated prop, will result in a type error.
Alternatively a soft deprecation can be achieved by using the JSDoc deprecated tag, e.g. `@deprecated Please use newProp instead`.

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
image: ./background.jpeg
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
layout: image-right
image: ./background.jpeg
---

### Disallow prop combinations

TypeScript's `never` type can also be used to prohibit certain combinations of props.

```ts
function ButtonLink({
  onClick, as, disabled, href
}: PropsWithChildren<ButtonLinkProps>): {
  const Component = as;

  if (Component === 'button') {
    console.log(href); // undefined
    console.log(disabled);
  }
  if (Component === 'a') {
    console.log(href); // string
    console.log(disabled);
  }

  return (
    <Component className={style.ButtonLink}
      onClick={onClick}>
      Click
    </Component>
  );
}
```

---
layout: image-right
image: ./background.jpeg
---

The as-field is used as discriminant property to distinguish both types.

```ts
type ButtonLinkCommonProps = {
  onClick: () => void;
};

type ButtonLinkButtonProps = {
  as: 'button';
  disabled?: boolean;
  href?: never; // type button should
  // never have a href attribute
};

type ButtonLinkLinkProps = {
  as: 'a';
  disabled?: false; // type link should
  // never have a disabled attribute
  href: string;
};

type ButtonLinkProps = ButtonLinkCommonProps
  & (ButtonLinkButtonProps |
    ButtonLinkLinkProps);

```

---
layout: image-right
image: ./background.jpeg
---

### Prohibit child components

The `never` type can also be used to prevent the creation of child components.

```ts
type ChildProps = PropsWithChildren<{
  otherProp: string;
}>;

type ChildlessProps = {
  children?: never;
  otherProp: string;
};

function App(): ReactElement {
  return (
    <>
      <Child otherProp="test1">
        <h2>Can have child content</h2>
      </Child>
      <Childless otherProp="test2" />
    </>
  );
}
```
