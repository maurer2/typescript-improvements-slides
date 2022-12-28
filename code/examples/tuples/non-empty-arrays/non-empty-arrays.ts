import { PersonList, Person } from './types';
import { faker } from '@faker-js/faker';

const peopleEmpty: PersonList = []; // Error - Type '[]' is not assignable to type 'PersonList'. Source has 0 element(s) but target requires 1
console.log(peopleEmpty);

const peopleAtLeastOne: PersonList = [
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
  } as Person,
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
  } as Person,
];
console.log(peopleAtLeastOne);

const people1 = [] as const; // or readonly []l

const people2 = [
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
  } as Person,
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
  } as Person,
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
  } as Person,
] as const;
const people11: PersonList = people1; // error
const people22: PersonList = people2;
console.log(people22);

// const people4: PersonList = Array.from({ length: 1 }, () => {
//   return {
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     isPrimeMinister: true,
//   } as const;
// });
