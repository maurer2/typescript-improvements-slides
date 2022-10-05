import { Person } from './types';
import { faker } from '@faker-js/faker';

export const people: Person[] = Array.from({ length: 10 }, () => {
  const hasAddress = faker.datatype.boolean();

  const address: Person['address'] = {
    house: faker.address.buildingNumber(),
    street: faker.address.street(),
    postcode: faker.address.buildingNumber(),
    city: faker.address.city(),
  };

  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
    ...(hasAddress && { address }),
  };
});
