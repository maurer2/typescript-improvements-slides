export type Loading = {
  state: 'loading';
};

export type Failed = {
  state: 'failed';
  errorCode: number;
};

export type Success<T> = {
  state: 'success';
  data: T,
};

export type APIRequest<T> = Loading | Failed | Success<T>;
