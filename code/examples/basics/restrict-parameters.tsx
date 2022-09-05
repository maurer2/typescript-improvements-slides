import { faker } from '@faker-js/faker';
import { Person, PersonList, PersonListFields } from './types';

function sayIt(list: PersonList): void {
  const listFormatted = list.map((entry) => Object.values(entry).join(' | '));
  console.log(listFormatted);
}

function sorted(list: PersonList, sortBy: PersonListFields): PersonList {
  const sortedList = [...list].sort((listEntryA, listEntryB) => {
    const fieldA = listEntryA[sortBy];
    const fieldB = listEntryB[sortBy];

    if (fieldA > fieldB) return 1;
    if (fieldA < fieldB) return -1;
    return 0;
  });

  return sortedList;
}

const people: ReadonlyArray<Person> = Array.from({ length: 5 }, () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  isPrimeMinister: false,
}));

const peopleListUnsorted: PersonList = people.map((person) => ({
  ...person,
  id: faker.datatype.uuid(),
  numberOfCats: faker.datatype.number({ min: 0, max: 50, precision: 1 }),
}));

const peopleListSortedByNumberOfCats: PersonList = sorted(peopleListUnsorted, 'numberOfCats');

const peopleListSortedByFirstName: PersonList = sorted(peopleListUnsorted, 'firstName');

const peopleListSortedByLastName: PersonList = sorted(peopleListUnsorted, 'lastName');

sayIt(peopleListUnsorted);
sayIt(peopleListSortedByNumberOfCats);
sayIt(peopleListSortedByFirstName);
sayIt(peopleListSortedByLastName);
