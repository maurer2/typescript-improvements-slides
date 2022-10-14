---
layout: section
---

## Structural typing vs nominal typing

---
layout: image-right
image: https://placekitten.com/1000/1000
hideInToc: true
---

### Structural typing

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
hideInToc: true
---

### Nominal typing

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
