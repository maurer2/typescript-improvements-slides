import { faker } from '@faker-js/faker';

import type { Person, PersonList } from './types.ts';

export const people: Person[] = Array.from({ length: 5 }, () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  isPrimeMinister: false,
}));

export const peopleList: PersonList = people.map((person) => ({
  ...person,
  id: faker.string.uuid(),
  numberOfCats: faker.number.int({ min: 0, max: 50 }),
}));
