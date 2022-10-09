type Timestamp = number;
type DateFormat = Date | Timestamp | string;

export type Person = {
  firstName: string;
  lastName: string;
  dateOfBirth: DateFormat;
};
