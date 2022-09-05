// @ts-ignore
import {faker} from '@faker-js/faker';
import { Person, PersonList, PersonListFields} from './types';

function seeItSayItSorted(list: PersonList, sortBy: PersonListFields): PersonList {
  const sortedList = [...list].sort((listEntryA, listEntryB) => {
    const fieldA = listEntryA[sortBy];
    const fieldB = listEntryB[sortBy];

    if (fieldA > fieldB) return 1;
    if (fieldA < fieldB) return -1;
    return 0;
  })

  return sortedList
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

const peopleListSortedByNumberOfCats: PersonList = seeItSayItSorted(peopleListUnsorted, 'numberOfCats');

const peopleListSortedByFirstName: PersonList = seeItSayItSorted(peopleListUnsorted, 'firstName');

const peopleListSortedByLastName: PersonList = seeItSayItSorted(peopleListUnsorted, 'lastName');

console.log(peopleListUnsorted.join());
console.log(peopleListSortedByNumberOfCats.join());
console.log(peopleListSortedByFirstName);
console.log(peopleListSortedByLastName);

