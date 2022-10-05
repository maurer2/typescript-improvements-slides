export type Person = {
  firstName: string;
  lastName: string;
  isPrimeMinister: boolean;
};

export type PersonWithAddress = Person & {
  address: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

export type People = Person | PersonWithAddress;
