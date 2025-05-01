function add(num1, num2, rs) {
  if (rs) {
    return num1 + num2;
  } else {
    return num1 * num2;
  }
}
var n1 = 200;
var n2 = 30;
result = true;
var answer = add(n1, n2, result);
console.log(answer);
