// union
// type aliases / surtom types

// function add(num1: number | string, num2: number | string) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     return num1.toString() + num2.toString();
//   }
// }
// console.log(add(2, 5));
// console.log(add("umar", " ejaz"));

// literal types
// function add(
//   num1: number | string,
//   num2: number | string,
//   convertion: "as-number" | "as-string"
// ) {
//   if ((typeof num1 === "number" && typeof num2 === "number") || "as-number") {
//     return +num1 + +num2;
//   } else if (
//     (typeof num1 === "string" && typeof num2 === "string") ||
//     "as-string"
//   ) {
//     return num1.toString() + num2.toString();
//   }
// }
// console.log(add("7", "4", "as-number"));
// console.log(add(3, 3, "as-string"));

// custom type
// type combine = number | string;
// type conversionType = "as-number" | "as-string";
// function add(num1: combine, num2: combine, convertion: conversionType) {
//   if ((typeof num1 === "number" && typeof num2 === "number") || "as-number") {
//     return +num1 + +num2;
//   } else if (
//     (typeof num1 === "string" && typeof num2 === "string") ||
//     "as-string"
//   ) {
//     return num1.toString() + num2.toString();
//   }
// }
// console.log(add("7", "4", "as-number"));
// console.log(add(3, 3, "as-string"));

type User = {
  name: string;
  age: number;
  email: string;
};
var user: User = {
  name: "umar",
  age: 20,
  email: "umar@gmail.com",
};

function user(user: User) {
  console.log(
    `hi ${user.name} your age is ${user.age} and your email is ${user.email}`
  );
}
console.log(user);
