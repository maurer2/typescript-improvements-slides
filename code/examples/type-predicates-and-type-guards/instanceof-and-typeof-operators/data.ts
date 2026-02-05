import { faker } from '@faker-js/faker';

import type { Person } from './types.ts';

export const people: Person[] = Array.from({ length: 10 }, () => {
  const dateOfBirth: Person['dateOfBirth'] = faker.helpers.arrayElement([
    faker.date.recent(),
    new Date(faker.date.recent()).getTime(),
    faker.date.recent().toLocaleString('en-GB'),
  ]);

  const person: Person = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dateOfBirth,
  };

  return person;
});
