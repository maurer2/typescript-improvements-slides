export type MacBook = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
  // additionalProperty: boolean;
};

export type Animal = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
};

export const macBookPro: MacBook = {
  name: 'Mac',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
  // additionalProperty: false,
};

export const elephant: Animal = {
  name: 'Benjamin',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
};

export const listOfMacBooks: MacBook[] = [
  macBookPro,
  elephant, // no error
];
