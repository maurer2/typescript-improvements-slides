import type { Animal, AnimalList, Cat, Dog } from './types.ts';

function showAnimalDetails(animal: Animal): void {
  // can't access isCurrentChiefMouser here, since it doesn't exist on all animal types
  // console.log(animal.isCurrentChiefMouser);

  if (animal.type === 'Cat') {
    // Can access isCurrentChiefMouser here, since typescript has narrowed the type down to Cat
    console.log(animal.isCurrentChiefMouser);

    return;
  }

  console.log(animal.canBeMistakenForAPony);
  // can't access isCurrentChiefMouser here, since it doesn't exist on the Dog type
  // console.log(animal.isCurrentChiefMouser);
}

const cat: Animal = {
  type: 'Cat',
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
};

const dog: Animal = {
  type: 'Dog',
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};

const animals: AnimalList = [cat, dog];

animals.forEach((animal: Animal): void => {
  console.log(JSON.stringify(animal, null, 4));
  showAnimalDetails(animal);
});
