import { productsURL } from '../lib';

const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
};

async function getProducts(): Promise<ProductType[]> {
  const Response = await fetch(productsURL);
  const products: Promise<ProductType[]> = Response.json();
  return products;
}

export default async function updateOutput(id: string) {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);

  const productsHtml = layoutProducts(products);
  if (productsHtml && output) {
    output.innerHTML = productsHtml;
  }
}

function layoutProducts(products: ProductType[]) {
  const items = products.map((p: ProductType) => {
    return loyourProduct(p);
  });
  return `<div class='items'>
        <ul class= "items-list">
        ${items.join(' ')}
        </ul>

</div>`;
}

function loyourProduct({ id, icon, name }: ProductType) {
  return `
  <li>
  <div class='card'>
  <div class='card-content'>
  <div class='content'>
  
  <span class= "card-id">${id}</span>
<i class= "card-icon ${icon} fa-lg"></i>
<span class= "card-name">${name}</span>
</div></div></div></li>`;
}
runTheLearningSamples();

function runTheLearningSamples() {
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`Product id=${id} name=${name}`);
  }

  displayProductInfo(10, '');
  displayProductInfo(12, 'Item 12');

  console.log(addNumbers(11, 34));
  let a = 33;
  let b;
  console.log(addNumbers(a, b));
  a = 44;
  b = null;
  console.log(addNumbers(a, b));

  function addNumbers(num: number, num1: number | undefined | null): number {
    const sum: number = num + (num1 ? num1 : 0);
    return sum;
  }

  //console.log(functionExpr(3,3))// can not do it
  const functionExpr = function (
    num: number,
    num1: number | undefined | null,
  ): number {
    const sum: number = num + (num1 ? num1 : 0);
    return sum;
  };

  console.log(functionExpr(3, null)); // expression function we can call only after declaration
  console.log(`${prefix} array type return`);
  const sampleProducts: ProductType[] = [
    { id: 10, name: 'ZERO', icon: 'fas fas-pizza-slice' },
    { id: 1, name: 'Ice Cream', icon: 'fas fas-ice-cream' },
    { id: 2, name: 'Cheese', icon: 'fas fas-cheese' },
  ];

  function getProductNames(): Array<string> {
    return sampleProducts.map((it) => {
      return it.name;
    });
  }

  console.log(getProductNames());

  console.log(`${prefix}  type `);

  function getProductById(id: number): ProductType | undefined {
    return sampleProducts.find((it) => {
      return it.id == id;
    });
  }

  //arrow function ex.
  const getProductByIdArrow = (id: number): ProductType | undefined => {
    return sampleProducts.find((p) => {
      p.id === id;
    });
  };

  console.log(getProductById(10));
  const { floor, random } = Math;
  const getRandomInt = (maximum: number = 1000) => {
    return floor(random() * maximum);
  };

  function createProduct(name: string, icon?: string): ProductType {
    const randomInt: number = getRandomInt(1000);
    return { id: randomInt, name: name, icon: icon };
  }

  console.log(createProduct('mango', 'mangoIcon'));
  console.log(createProduct('banana'));

  for (let i = 0; i < 10; i++) {
    console.log(`${i} ${getRandomInt()}`);
  }

  // rest of parameters
  // can be unlimeted

  function printLocation(
    city: string,
    street: string,
    zip: number,
    ...rest: string[]
  ): void {
    const restOfAddr = rest.length ? 'rest: ' + rest.join('-') : '';
    console.log(`City: ${city} street: ${street} zip: ${zip} ${restOfAddr}`);
  }
  printLocation('Orlando', 'somestr', 3434);
  console.log('=============');
  printLocation('22Orlando', 'somestr', 11111, 'ONE', 'two', 'other');

  //distruction
  console.log(`${prefix} distruction`);
  function displayProduct({ name, id }: ProductType): void {
    console.log(`Displaing: ${name} with ${id}`);
  }

  displayProduct(createProduct('OOOONE'));

  displayProduct(createProduct('Two', 'someIcon'));
}
