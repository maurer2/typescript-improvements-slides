import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';
import { setTimeout } from 'timers/promises';

import type { Customer } from '../../types/customer';

export default async function handler(request: NextApiRequest, response: NextApiResponse<Customer[]>) {
  const customers: Customer[] = Array.from({ length: 1000 }, () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number({ min: 18, max: 120, precision: 1 }),
    regularPayments: faker.datatype.number({ min: 0, max: 10, precision: 1 }),
    missedPayments: faker.datatype.number({ min: 0, max: 5, precision: 1 }),
    defaultedPayments: faker.datatype.number({ min: 0, max: 3, precision: 1 }),
  }));

  await setTimeout(2500);

  response.status(200).json(customers);
}
