import { faker } from '@faker-js/faker';

import type { People } from './types.ts';

export const people: People[] = Array.from({ length: 10 }, () => {
  const hasAddress = faker.datatype.boolean();

  const person: People = {
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
});
