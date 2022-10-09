import type { Person } from './types';
import { people } from './data';

function showPersonDetails(person: Person): void {
  const { firstName, lastName, isPrimeMinister, address } = person;

  console.log(`\nFirst name: ${firstName}`);
  console.log(`Last name: ${lastName}`);
  console.log(`Is prime minister: ${isPrimeMinister}`);

  if (address) {
    const { house, street, postcode, city } = address;

    console.log(`House: ${house}`);
    console.log(`Street: ${street}`);
    console.log(`Postcode: ${postcode}`);
    console.log(`City: ${city}`);
  }
}

people.forEach((person) => showPersonDetails(person));
