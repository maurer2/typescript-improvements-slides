import { people } from './data';

import type { Person } from './types';

function showPersonDetails(person: Person): void {
  const { firstName, lastName, dateOfBirth } = person;

  console.log(`\nFirst name: ${firstName}`);
  console.log(`Last name: ${lastName}`);

  if (typeof dateOfBirth === 'string') {
    // const type = dateOfBirth; // string
    console.log(`Date of birth1: ${dateOfBirth}`);

    return;
  }

  if (typeof dateOfBirth === 'number') {
    // const type = dateOfBirth; // Timestamp
    const dateString = new Date(dateOfBirth).toLocaleDateString('en-GB');
    console.log(`Date of birth2: ${dateString}`);

    return;
  }

  /// const type = dateOfBirth; // Date
  console.log(`Date of birth3: ${dateOfBirth.toLocaleDateString('en-GB')}`);
}

people.forEach((person) => showPersonDetails(person));

// https://github.com/microsoft/TypeScript/issues/31755#issuecomment-498669080
