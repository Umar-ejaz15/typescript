// // // lets learn generics
// // var fruits: Array<string | number> = ["apple", "banana", "orange"];
// // fruits.push("grapes");
// // fruits.push(10);
// // console.log(fruits);
// // type person = {
// //   name: string;
// //   age: number;
// // };
// // var person: Array<person> = [
// //   {
// //     name: "John",
// //     age: 30,
// //   },
// // ];
// // person.push({
// //   name: "Jane",
// //   age: 25,
// // });
// // console.log(person);
// // function merge<T extends object, U extends object>(objA: T, objB: U): {} {
// //   return { ...objA, ...objB };
// // }
// // var result = merge({ name: "John", role: "admin" }, { age: 30 });
// // console.log(result);
// interface responseData<T extends object> {
//   data: T;
//   length: number;
// }
// type person = {
//   name: string;
//   age: number;
// };
// var person: responseData<person> = {
//   data: {
//     name: "John",
//     age: 30,
//   },
//   length: 2,
// };
// console.log(person);
function getFirst(arr) {
    return arr[0];
}
var numberARR = getFirst([1, 2, 3, 4]);
var stringARR = getFirst(["a", "b", "c", "d"]);
console.log(numberARR, stringARR);
