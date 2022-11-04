import { faker } from '@faker-js/faker';

import type { Loading, Failed, Success, Cat, APIRequestStatus } from './types';

async function getResponse<T>(): Promise<APIRequestStatus<T>> {
  return faker.helpers.arrayElement([
    // Loading
    {
      state: 'loading',
    } as Loading,
    // Failed
    {
      state: 'failed',
      statusCode: 500,
      errorMessage: faker.helpers.arrayElement(['Server error error message', undefined]),
    } as Failed,
    // Success
    {
      state: 'success',
      statusCode: 200,
      data: {
        type: 'Cat',
        name: 'Larry',
        sound: 'Meow',
        isCurrentChiefMouser: true,
      } as T,
    } as Success<T>
  ])
}

async function sendAPIRequest<T>(): Promise<void> {
  const requestStatus = await getResponse<T>();

  switch (requestStatus.state) {
    case 'loading': {
      const { state } = requestStatus;
      console.log(`State: ${state}`);
      return;
    }
    case 'failed': {
      const { state, statusCode, errorMessage } = requestStatus;
      console.log(`State: ${state} ${statusCode} ${errorMessage ? errorMessage : '- no error message'}`);
      return;
    }
    case 'success': {
      const { state, statusCode, data } = requestStatus;
      console.log(`State: ${state} ${statusCode} ${JSON.stringify(data, null, 4)}`);
      return;
    }
    default: {
      console.log('default', requestStatus); // currentAPIRequestStatus === never type
    }
  }
}

sendAPIRequest<Cat>();
