import { faker } from '@faker-js/faker';

import { Person } from './types';

export const people: Person[] = Array.from({ length: 10 }, () => {
  const hasAddress = faker.datatype.boolean();

  const person: Person = {
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
