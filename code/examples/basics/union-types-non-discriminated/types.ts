export type AnimalSound = 'Meow' | 'Woof' | 'Moo' | 'Oink';

export type Cat = {
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};

export type Dog = {
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};

export type Cow = {
  name: string;
  sound: AnimalSound;
};

export type Animal = Cat | Dog | Cow;

export type AnimalList = Animal[];
