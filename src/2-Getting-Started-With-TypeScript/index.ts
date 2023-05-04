let x: number = 7;
let y: number = 15;
const sum: number = x + y;
const result: string = `The sum of ${x} and ${y} is ${sum}`;
console.log(result);

const output = document.querySelector('#output');
enum Hobby {
  Sport = 'SPORT',
  Home = 'HOME',
  Bar = 'BAR',
  Travel = 'TRAVEl',
}

enum Jobs {
  QA = 5,
  DEV,
  BA, //7
}
const someThin = Hobby.Sport;

console.log(someThin);
if (output) {
  output.innerHTML = result;
}

console.log(Jobs.BA);
