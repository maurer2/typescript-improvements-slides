import { People, Person } from './types';
import { faker } from '@faker-js/faker';

const people1 = [
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
    test: 'test',
  } as Person,
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
    test: 'test', // Error
  } satisfies Person,
] as const satisfies readonly [...People[]]
console.log(people1);

const people2: People[] = [
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
    test: 'test',
  } as Person,
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    isPrimeMinister: false,
    test: 'test', // Error
  } satisfies Person,
];
console.log(people2);
