import { Animal, AnimalList } from './types';

function showAnimalDetails(animal: Animal) {
  // can't access isCurrentChiefMouserToTheCabinetOffice here, since it doesn't exist on all animal types
  // console.log(animal.isCurrentChiefMouserToTheCabinetOffice);

  if (animal.type === 'Cat') {
    // Can access isCurrentChiefMouserToTheCabinetOffice here, since typescript has narrowed the type down to Cat
    console.log(animal.isCurrentChiefMouserToTheCabinetOffice);

    return;
  }

  // can't access isCurrentChiefMouserToTheCabinetOffice here, since it doesn't exist on the Dog type
  // console.log(animal.isCurrentChiefMouserToTheCabinetOffice);
}

const cat: Animal = {
  type: 'Cat',
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouserToTheCabinetOffice: false,
};

const dog: Animal = {
  type: 'Dog',
  name: 'Ben',
  sound: 'Woof',
};

const animals: AnimalList = [cat, dog];

animals.forEach((animal) => {
  console.log(JSON.stringify(animal, null, 4));

  showAnimalDetails(animal);
});
