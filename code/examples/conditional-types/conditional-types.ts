import { Customer, WithUppercaseValues } from './types';

const uppercaseCustomer: WithUppercaseValues<Customer> = {
  // id: 'abcd', // error
  id: 'ABCD',
  firstName: 'LARRY',
};

console.log(JSON.stringify(uppercaseCustomer, null, 4));
