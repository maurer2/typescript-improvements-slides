import { APIRequestStatus, Loading, Failed, Success, Cat } from './types';

async function fakeAPIResponse<T>(): Promise<APIRequestStatus<T>> {
  // https://github.com/lodash/lodash/blob/67389a8c78975d97505fa15aa79bec6397749807/lodash.js#L3875-L3886
  const randomIndex = Math.floor(Math.random() * 3);

  if (randomIndex === 0) {
    return {
      state: 'loading',
    } as Loading;
  }

  if (randomIndex === 1) {
    return {
      state: 'failed',
      statusCode: 500,
      errorMessage: 'Server error',
    } as Failed;
  }

  return {
    state: 'success',
    statusCode: 200,
    data: {
      type: 'Cat',
      name: 'Larry',
      sound: 'Meow',
      isCurrentChiefMouserToTheCabinetOffice: true,
    },
  } as Success<T>;
}

async function sendAPIRequest(): Promise<void> {
  const currentAPIRequestStatus = await fakeAPIResponse<Cat>();

  switch (currentAPIRequestStatus.state) {
    case 'loading': {
      const { state } = currentAPIRequestStatus;
      console.log(`State: ${state}`);
      return;
    }
    case 'failed': {
      const { state, statusCode, errorMessage } = currentAPIRequestStatus;
      console.log(`State: ${state} ${statusCode} ${errorMessage}`);
      return;
    }
    case 'success': {
      const { state, statusCode, data } = currentAPIRequestStatus;
      console.log(`State: ${state} ${statusCode} ${data}`);
      return;
    }
    default: {
      console.log('default', currentAPIRequestStatus); // currentAPIRequestStatus === never type
    }
  }
}
