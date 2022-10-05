import { Persons, PersonWithAddress } from './types';
import { faker } from '@faker-js/faker';

export const people: Persons[] = Array.from({ length: 10 }, () => {
  const hasAddress = faker.datatype.boolean();

  const address: PersonWithAddress['address'] = {
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
