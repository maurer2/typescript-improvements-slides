type Person = {
  name: string;
  realName: string;
};

type PersonWithInitials = Person & {
  initials: string;
};

const people: Person[] = [
  {
    name: 'Graham Norton',
    realName: 'Graham Walker',
  },
  {
    name: 'Calvin Harris',
    realName: 'Adam Wiles',
  },
  {
    name: 'David Tennant',
    realName: 'David McDonald',
  },
  {
    name: 'Michael Caine',
    realName: 'Maurice Joseph Micklewhite',
  },
  {
    name: 'Helen Mirren',
    realName: 'Ilyena Lydia Mironoff',
  },
];

function getSortedPeople(peopleUnsorted: ReadonlyArray<Person>): Person[] | PersonWithInitials[] {
  const peopleSorted: Person[] | PersonWithInitials[] = [...peopleUnsorted]
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

function test() {
  const peopleSorted = getSortedPeople(people);
  const peopleUnsorted = people;

  console.log('Example: 2 ', peopleSorted === peopleUnsorted);
}

export default test;
