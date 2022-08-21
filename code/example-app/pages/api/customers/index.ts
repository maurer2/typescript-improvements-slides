import { faker } from '@faker-js/faker';
import { setTimeout } from 'timers/promises';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { CustomerOverview } from '../../../types/customer';

export default async function handler(_: NextApiRequest, response: NextApiResponse<CustomerOverview[]>) {
  const customers: CustomerOverview[] = Array.from({ length: 1000 }, () => {
    const missedPayments = faker.datatype.number({ min: 0, max: 5, precision: 1 });
    const defaultedPayments = faker.datatype.number({ min: 0, max: 3, precision: 1 });
    const totalPayments = faker.datatype.number({ min: missedPayments + defaultedPayments, max: 50, precision: 1 });

    return {
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      missedPayments,
      defaultedPayments,
      totalPayments,
    };
  });

  await setTimeout(500);
  response.status(200).json(customers);
}
