export type Person = {
  firstName: string;
  lastName: string;
  isPrimeMinister: boolean;
  address?: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

// variadic tuple
export type PersonList = readonly [Person, ...Person[]];
