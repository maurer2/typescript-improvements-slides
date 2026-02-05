import { people } from './data.ts';
import type { People } from './types.ts';

function showPersonDetails(person: People): void {
  const { firstName, lastName, isPrimeMinister } = person; //  Person | PersonWithAddress

  console.log(`\nFirst name: ${firstName}`);
  console.log(`Last name: ${lastName}`);
  console.log(`Is prime minister: ${isPrimeMinister}`);

  if ('address' in person) {
    const type = person; // PersonWithAddress
    const { house, street, postcode, city } = person.address;

    console.log(`House: ${house}`);
    console.log(`Street: ${street}`);
    console.log(`Postcode: ${postcode}`);
    console.log(`City: ${city}`);
  }
}

people.forEach((person) => showPersonDetails(person));
