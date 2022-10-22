export type DatePickerBase = {
  day: number;
  month: number;
  year: number;
};

export type DatePickerRegular = {
  time?: string;
  timezone?: string;
  maxNumberOfDays?: number;
  showTimePicker: boolean; // unique to DatePickerRegular
};

export type DatePickerDateOfBirthMode = {
  minAge?: number;
  maxAge?: number;
  showIAmOldEnoughBox: boolean; // unique to DatePickerDateOfBirthMode
};

export type DatePicker = DatePickerBase & (DatePickerRegular | DatePickerDateOfBirthMode);
