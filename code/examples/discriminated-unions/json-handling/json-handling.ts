import { faker } from '@faker-js/faker';

import type { Loading, Failed, Success, Cat, APIRequestStatus } from './types';

async function fakeAPIResponse<T>(): Promise<APIRequestStatus<T>> {
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
        isCurrentChiefMouserToTheCabinetOffice: true,
      },
    } as Success<T>
  ])
}

async function sendAPIRequest<T>(): Promise<void> {
  const currentAPIRequestStatus = await fakeAPIResponse<T>();

  switch (currentAPIRequestStatus.state) {
    case 'loading': {
      const { state } = currentAPIRequestStatus;
      console.log(`State: ${state}`);
      return;
    }
    case 'failed': {
      const { state, statusCode, errorMessage } = currentAPIRequestStatus;
      console.log(`State: ${state} ${statusCode} ${errorMessage ? errorMessage : '- no error message'}`);
      return;
    }
    case 'success': {
      const { state, statusCode, data } = currentAPIRequestStatus;
      console.log(`State: ${state} ${statusCode} ${JSON.stringify(data, null, 4)}`);
      return;
    }
    default: {
      console.log('default', currentAPIRequestStatus); // currentAPIRequestStatus === never type
    }
  }
}

sendAPIRequest<Cat>();
