export type Loading = {
  state: 'loading';
};

export type Failed = {
  state: 'failed';
  statusCode: number;
  errorMessage?: string;
};

export type Success<T> = {
  state: 'success';
  statusCode: number;
  data: T;
};

export type Cat = {
  type: 'Cat';
  name: string;
  sound: 'Meow';
  isCurrentChiefMouserToTheCabinetOffice: boolean;
};

export type APIRequestStatus<T> = Loading | Failed | Success<T>;

export type APIRequestStateTypes = APIRequestStatus<unknown>['state'];
