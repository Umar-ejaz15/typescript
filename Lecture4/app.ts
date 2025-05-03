// function

// function addition(num1: number, num2: number): number {
//   return num1 + num2;
// }
// console.log(addition(2, 5));

// function great(name: string): string {
//   return `hello ${name}`;
// }
// console.log(great("umar"));

// let combine: Function;
// combine = () => {};

type CB = (num1: number) => void;
function addition(a: number, b: number, cb: CB) {
  let result: number;
  result = a + b;
  cb(result);
}
addition(1, 3, (result: number) => {
  console.log(result);
});
