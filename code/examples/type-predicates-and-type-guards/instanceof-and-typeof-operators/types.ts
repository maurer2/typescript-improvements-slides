type Timestamp = number;

type DateString = string;

type DateFormat = Date | Timestamp | DateString;

export type Person = {
  firstName: string;
  lastName: string;
  dateOfBirth: DateFormat;
};
