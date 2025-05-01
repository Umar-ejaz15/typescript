function add(num1: number, num2: number, rs: boolean) {
  if (rs) {
    return num1 + num2;
  } else {
    return num1 * num2;
  }
}
const n1 = 200;
const n2 = 30;
result = true;

const answer = add(n1, n2, result);
console.log(answer);
