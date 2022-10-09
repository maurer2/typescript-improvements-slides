import { people } from './data';
import type { Person, PersonWithInitials } from './types';

function getSortedPeople(peopleUnsorted: Person[]): Person[] | PersonWithInitials[] {
  const peopleSorted: Person[] | PersonWithInitials[] = peopleUnsorted
    // .map((person: Person) => {
    //   const names: string[] = person.name.split(/\s+/);
    //   const initials: string = names.map((name) => name.charAt(0).toLocaleUpperCase()).join('');
    //   return {
    //     ...person,
    //     initials,
    //   };
    // })
    .sort((personA: Person, personZ: Person) => {
      if (personA.name < personZ.name) {
        return -1;
      }
      if (personA.name > personZ.name) {
        return 1;
      }
      return 0;
    });

  return peopleSorted;
}

export default function test() {
  const peopleSorted = getSortedPeople(people);
  const peopleUnsorted = people;

  console.log('Example 1 has mutated', peopleSorted === peopleUnsorted);
}
