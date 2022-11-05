---
layout: section
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Basics

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Types & interfaces

In order to shape data, types and interfaces can be utilized. They can be used interchangeably in a lot of cases, but differ in syntax and mutability.
interfaces are mutable, while types are not. Unlike interfaces, types can also be used for primitives like number or string.

```ts
type CustomerID = string;

type Customer = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
}
```

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

In TypeScript keys/fields of types can accessed via Array notation in other types or when creating variables.

```ts
type CustomerID = string;

type Customer = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};

const customerLastName:
  Customer['lastName'] = 'Peter';

const customerLastName:
  Customer.lastName = 'Peter'; // error
```
