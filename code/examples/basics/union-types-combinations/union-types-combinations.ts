import type { DatePicker } from './types';

const regularDatePicker: DatePicker = {
  day: 1,
  month: 1,
  year: 2000,
  showTimePicker: false,
}

const dobDatePicker: DatePicker = {
  day: 1,
  month: 1,
  year: 2000,
  minAge: 0,
  maxAge: 120,
  showIAmOldEnoughBox: false,
}

const regularDatePickerType = regularDatePicker;
const dobDatePickerType = dobDatePicker;
