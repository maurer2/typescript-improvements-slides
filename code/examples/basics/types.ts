export type Person = {
  firstName: string,
  lastName: string,
  isPrimeMinister: boolean,
}

export type PersonList = ReadonlyArray<Pick<Person, 'firstName' | 'lastName'> & {
  id: string,
  numberOfCats: number,
  firstName: string,
  lastName: string,
}>

// export type PersonListFields = keyof PersonList // gets all fields of the array type
export type PersonListFields = keyof PersonList[number]; // gets all fields of the type of the array
