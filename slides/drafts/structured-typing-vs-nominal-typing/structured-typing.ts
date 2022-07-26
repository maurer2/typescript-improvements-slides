type MacBook = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
  // additionalProperty: boolean
}

type Animal = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
}

const macBookPro: MacBook = {
  name: 'Mac',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
  // additionalProperty: false,
}

const elephant: Animal = {
  name: 'Benjamin',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
}

const listOfMacBooks: MacBook[] = [
  macBookPro,
  elephant // no error
]
