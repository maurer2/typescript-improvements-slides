import { PersonList } from './types';
import { faker } from '@faker-js/faker';

const peopleEmpty: PersonList = []; // Error - Type '[]' is not assignable to type 'PersonList'. Source has 0 element(s) but target requires 1
console.log(peopleEmpty);

const peopleAtLeastOne: PersonList = [
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
  },
];
console.log(peopleAtLeastOne);
