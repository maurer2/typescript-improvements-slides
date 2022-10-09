export type AnimalSound = 'Meow' | 'Woof';

export type Cat = {
  type: 'Cat';
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};

export type Dog = {
  type: 'Dog';
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};

export type Animal = Cat | Dog;

export type AnimalList = [Animal, Animal];
