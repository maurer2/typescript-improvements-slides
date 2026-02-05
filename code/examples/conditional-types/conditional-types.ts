import type { Customer, WithUppercaseValues } from './types.ts';

const uppercaseCustomer: WithUppercaseValues<Customer> = {
  // id: 'abcd', // error
  id: 'ABCD',
  firstName: 'LARRY',
};

console.log(JSON.stringify(uppercaseCustomer, null, 4));
