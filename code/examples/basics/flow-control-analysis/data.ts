import { faker } from '@faker-js/faker';

import type { Person } from './types.ts';

function getPerson(): Person {
  const hasAddress = faker.datatype.boolean();

  const person: Person = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    isPrimeMinister: false,
    ...(hasAddress && {
      address: {
        house: faker.location.buildingNumber(),
        street: faker.location.street(),
        postcode: faker.location.buildingNumber(),
        city: faker.location.city(),
      },
    }),
  };

  return person;
}

export const people: Person[] = Array.from({ length: 10 }, getPerson);
