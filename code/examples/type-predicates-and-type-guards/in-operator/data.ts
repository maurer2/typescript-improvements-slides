import { faker } from '@faker-js/faker';

import type { People } from './types.ts';

export const people: People[] = Array.from({ length: 10 }, () => {
  const hasAddress = faker.datatype.boolean();

  const person: People = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
    ...(hasAddress && {
      address: {
        house: faker.address.buildingNumber(),
        street: faker.address.street(),
        postcode: faker.address.buildingNumber(),
        city: faker.address.city(),
      },
    }),
  };

  return person;
});
