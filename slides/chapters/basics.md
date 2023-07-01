---
layout: section
image: ./background.jpeg
---

## Basics

---
layout: image-right
image: ./background.jpeg
---

### Types & interfaces

In order to shape data, types and interfaces can be utilized. They can be used interchangeably in a lot of cases, but differ in syntax and mutability.
interfaces are mutable, while types are not. Unlike interfaces, types can also be used for primitives like number or string.

```ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}
```

---
layout: image-right
image: ./background.jpeg
---

Keys/members of types and interfaces can be accessed via bracket notation in other types and interfaces or when creating variables.
Type information of referenced types are preserved.

```ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};

const customerLastName:
  Customer1['lastName'] = 'Peter';

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}

const customerLastName2:
  Customer2['lastName'] = 'Peter';
```
