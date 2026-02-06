import { faker } from '@faker-js/faker';

import { People, Person } from './types.ts';

const people1 = [
  {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    isPrimeMinister: false,
    test: 'test',
  } as Person,
  {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    isPrimeMinister: false,
    test: 'test', // Error
  } satisfies Person,
] as const satisfies readonly [...People[]];
console.log(people1);

const people2: People[] = [
  {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    isPrimeMinister: false,
    test: 'test',
  } as Person,
  {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    isPrimeMinister: false,
    test: 'test', // Error
  } satisfies Person,
];
console.log(people2);
