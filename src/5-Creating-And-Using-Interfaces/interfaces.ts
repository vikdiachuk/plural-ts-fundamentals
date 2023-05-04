export interface Product {
  id: number;
  name: string;
  icon: string;
  //optional interface memeber
  description?: string;

  // function
  // placeOrder(id: number): boolean;
}
// interface allow only objects
//type can be primitive or union with primitive

type MyType =
  | {
      id: number;
      name: string;
    }
  | string;

const my: MyType = {
  id: 3,
  name: 'three',
};

type SecondType = Product | string;

const my1 = '';

// can be only those two strings - very close to Enum
type OtherType = 'SOMETHING' | 'THIS';
const oth: OtherType = 'SOMETHING';

enum MyEnum {
  'RED',
  'BLACK',
}

const mn = MyEnum.RED;
type AndOther = 1 | 3 | 6 | 45;
let andO: AndOther = 6;

//type from Array values
const colorsAr = ['red', 'white', 'blue'] as const; // creates immutable array (all values are constant)

type colorType = (typeof colorsAr)[number];
const mycol: colorType = 'blue'; //'white';
