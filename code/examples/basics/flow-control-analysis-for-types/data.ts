import { Person, PersonWithAddress, Persons } from './types';
import { faker } from '@faker-js/faker';

export const people: Persons[] = Array.from({ length: 10 }, () => {
  const hasAddress = faker.datatype.boolean();

  const person: Person = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
  };

  if (!hasAddress) {
    return person;
  }

  const personWithAddress: PersonWithAddress = {
    ...person,
    address: {
      house: faker.address.buildingNumber(),
      street: faker.address.street(),
      postcode: faker.address.buildingNumber(),
      city: faker.address.city(),
    },
  };

  return personWithAddress;
});
