// const person: {
//   name: string;
//   age: number;
//   city: string;
//   location: {
//     lat: number;
//     lng: number;
//   };
// } = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   location: {
//     lat: 40.7128,
//     lng: -74.006,
//   },
// };
// console.log(person);

// var person: {
//   name: string;
//   age: number;
//   city: string;
//   location: {
//     lat: number;
//     lng: number;
//   };
//   skills: string[];
//   details: [number, string];
// } = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   location: {
//     lat: 40.7128,
//     lng: -74.006,
//   },
//   skills: ["JavaScript", "TypeScript", "React"],
//   details: [4.7, "male"],
// };

// var favLang: string[] = ["react", "next"];
// console.log(person);
// console.log(favLang);

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
var user = {
  name: "umar",
  email: "umar@gmail.com",
  role: Role.AUTHOR,
};

if (user.role === Role.ADMIN) {
  console.log("Admin");
} else if (user.role === Role.READ_ONLY) {
  console.log("Read Only");
} else {
  console.log("Author");
}
