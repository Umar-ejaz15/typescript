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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var user = {
    name: "umar",
    email: "umar@gmail.com",
    role: Role.AUTHOR,
};
if (user.role === Role.ADMIN) {
    console.log("Admin");
}
else if (user.role === Role.READ_ONLY) {
    console.log("Read Only");
}
else {
    console.log("Author");
}
