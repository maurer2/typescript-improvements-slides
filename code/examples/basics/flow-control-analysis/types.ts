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
