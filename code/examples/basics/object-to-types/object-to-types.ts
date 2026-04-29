/* eslint-disable @typescript-eslint/no-unused-vars */
const HTTP_STATUS_CODES = {
  OKAY: 200,
  MOVED_PERMANENTLY: 301,
  NOT_FOUND: 404,
  IM_A_TEAPOT: 418,
  SERVER_ERROR: 500,
} as const;

// version 1 - step by step version, generates type from object and then extracts keys and values
type HttpStatusCodes = typeof HTTP_STATUS_CODES;
type HttpStatusCodeVerbs = keyof HttpStatusCodes; // or keyof typeof HTTP_STATUS_CODES;
type HttpStatusCodeValues = HttpStatusCodes[HttpStatusCodeVerbs];

// version 2 - inline version of version 1 with repeated typeof lookup
type HttpStatusCodeValues2 = (typeof HTTP_STATUS_CODES)[keyof typeof HTTP_STATUS_CODES];

// version 3 - mix of v1 and v2 with intermediate type to avoid repeated typeof lookup
type HttpStatusCodes3 = typeof HTTP_STATUS_CODES;
// type HttpStatusCodeVerbs3 = keyof HttpStatusCodes3;
type HttpStatusCodeValues3 = HttpStatusCodes3[keyof HttpStatusCodes3]; // similar concept: code/examples/clever stuff/type-to-union.ts

// generic - same as type-fest ValueOf ://github.com/sindresorhus/type-fest/blob/main/source/value-of.d.ts
type Values<T> = T[keyof T];
type HttpStatusCodeValues4 = Values<typeof HTTP_STATUS_CODES>;
