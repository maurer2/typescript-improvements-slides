import { Person } from './types';
import { people } from './data';

function showPersonDetails(person: Person): void {
  const { firstName, lastName, dateOfBirth } = person;

  console.log(`\nFirst name: ${firstName}`);
  console.log(`Last name: ${lastName}`);

  if (typeof dateOfBirth === 'string') {
    // const type = dateOfBirth; // string
    console.log(`Date of birth: ${dateOfBirth}`);

    return;
  }

  if (typeof dateOfBirth === 'number') {
    // const type = dateOfBirth; // number
    const dateString = new Date(dateOfBirth).toLocaleDateString('en-GB');
    console.log(`Date of birth: ${dateString}`);

    return;
  }

  /// const type = dateOfBirth; // Date
  console.log(`Date of birth: ${dateOfBirth.toLocaleDateString('en-GB')}`);
}

// https://github.com/microsoft/TypeScript/issues/31755#issuecomment-498669080
