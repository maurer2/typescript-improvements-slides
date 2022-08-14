export type Loading = {
  state: 'loading';
  json: never;
};

export type Failed = {
  state: 'failed';
  errorCode: number;
  json: never;
};

export type Success<T> = {
  state: 'success';
  json: T,
};

export type APIRequest<T> = Loading | Failed | Success<T>;
