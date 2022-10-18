import type { Cat, Dog, Cow, Animal, AnimalList } from './types';

function showAnimalDetails(animal: Cat | Dog | Cow): void {
  console.log(`\nName: ${animal.name}`);
  console.log(`Sound: ${animal.sound}`);

  // Cat
  if (Object.hasOwn(animal, 'isCurrentChiefMouser')) {
    const currentAnimal = animal as Cat;
    console.log(`Is current Chief Mouser: ${currentAnimal.isCurrentChiefMouser}`);

    return;
  }

  // Dog
  if (Object.hasOwn(animal, 'canBeMistakenForAPony')) {
    const currentAnimal = animal as Dog;
    console.log(`Can be mistaken for a pony: ${currentAnimal.canBeMistakenForAPony}`);

    return;
  }
}

const cat: Cat = {
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
};

const dog: Dog = {
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};

const cow: Cow = {
  name: 'Gertie',
  sound: 'Meow', // no error
};

const animals: AnimalList = [cat, dog, cow];

animals.forEach((animal: Animal): void => {
  showAnimalDetails(animal);
});
