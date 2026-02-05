import type { PersonList, PersonListFields } from './types.js';
import { peopleList } from './data.ts';

function sorted(list: PersonList, sortBy: PersonListFields): PersonList {
  const sortedList = [...list].sort((entryA, entryB) => {
    const fieldA = entryA[sortBy];
    const fieldB = entryB[sortBy];

    if (fieldA > fieldB) {
      return 1;
    }
    if (fieldA < fieldB) {
      return -1;
    }
    return 0;
  });

  return sortedList;
}

function sayIt(list: PersonList): void {
  const listAsString: string[] = list.map((entry) => Object.values(entry).join(' | '));
  console.log(listAsString);
}

const peopleListSortedByNumberOfCats: PersonList = sorted(peopleList, 'numberOfCats');
const peopleListSortedByFirstName: PersonList = sorted(peopleList, 'firstName');
const peopleListSortedByLastName: PersonList = sorted(peopleList, 'lastName');

sayIt(peopleList);
sayIt(peopleListSortedByNumberOfCats);
sayIt(peopleListSortedByFirstName);
sayIt(peopleListSortedByLastName);
