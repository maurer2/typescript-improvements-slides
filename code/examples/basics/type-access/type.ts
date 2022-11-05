type CustomerID = string;

type Customer = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};

const customerLastName: Customer['lastName'] = 'Peter';
// const customerLastName: Customer.lastName = 'Peter';

interface Customer2 {
  id: string;
  firstName: string;
  lastName: string;
}

const customerLastName2: Customer['lastName'] = 'Peter';
