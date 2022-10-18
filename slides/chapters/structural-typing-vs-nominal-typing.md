---
layout: section
background: https://source.unsplash.com/collection/94734566/1920x1080
---

## Structural typing vs nominal typing

---
layout: two-cols-header-with-gap
hideInToc: true
---

### Structural typing

Structural typing means that types with the same structure are compatible regardless of name. TypeScript uses structural typing by default.

::left::

```ts
type MacBook = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
};

type Animal = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
};
```

::right::

```ts
const macBookPro: MacBook = {
  name: 'Mac',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
};

const elephant: Animal = {
  name: 'Benjamin',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
};

const listOfMacBooks: MacBook[] = [
  macBookPro,
  elephant, // no error
];
```

---
hideInToc: true
---

### Nominal typing

Nominal typing means that each type is unique and types can not be used interchangeably even when structurally identically.
Compatibility can be created via interfaces or inheritance.

Nominal Typing is widely used in languages like Java or C#. Flow uses a mix of nominal and structural typing.
Nominal Typing can be emulated in TypeScript via Branded Types.

```java
public interface IMacBookAnimal {}
public record MacBook(String colour) implements IMacBookAnimal {}
public record Animal(String colour) implements IMacBookAnimal {}

public class NominalTypingExample {
  public static void main(String[] args) {
    var macBookPro = new MacBook("gray");
    var elephant = new Animal("gray");
    // List<MacBook> listOfMacBooks = Arrays.asList(macBookPro, elephant); // error
    List<IMacBookAnimal> listOfMacBooks = Arrays.asList(macBookPro, elephant); // no error
  }
}
```
