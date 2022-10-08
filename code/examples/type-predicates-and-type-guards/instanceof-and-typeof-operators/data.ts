import { faker } from '@faker-js/faker';
import { Person } from './types';

export const people: Person[] = Array.from({ length: 10 }, () => {
  const randomNumber = faker.datatype.number({ min: 0, max: 2, precision: 1 });

  let dateOfBirth: Person['dateOfBirth'] = faker.date.recent();
  if (randomNumber === 1) {
    dateOfBirth = dateOfBirth.getTime();
  }
  if (randomNumber === 2) {
    dateOfBirth = dateOfBirth.toLocaleString('en-GB');
  }

  const person: Person = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dateOfBirth,
  };

  return person;
});
