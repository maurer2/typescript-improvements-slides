export type AnimalSound = 'Meow' | 'Woof';

export type Cat = {
  type: 'Cat';
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouserToTheCabinetOffice: boolean;
};

export type Dog = {
  type: 'Dog';
  name: string;
  sound: AnimalSound;
};

export type Animal = Cat | Dog;

export type AnimalList = [Animal, Animal];
