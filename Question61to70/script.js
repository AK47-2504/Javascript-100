// Question 61
// Create an object representing a person with properties such as `name`, `age`, and `city`. Print the object.
// let user = {
//   name: "Anish",
//   age: 21,
//   city: "Mumbai",
// };
// console.log(user);

// Question 62
// Add a new property (e.g., `isStudent`) to an existing object and print the updated object.
// let user = {
//   name: "Anish",
//   age: 21,
//   city: "Mumbai",
// };
// user.isStudent = true;
// console.log(user);

// Question 63
// Access and print the value of the `city` property from an object using bracket notation
// let user = {
//   name: "Anish",
//   age: 21,
//   city: "Mumbai",
// };
// user.isStudent = true;
// console.log(user["city"]);

// Question 64
// Delete a property (e.g., `age`) from an object and print the modified object.
// let user = {
//   name: "Anish",
//   age: 21,
//   city: "Mumbai",
// };
// user.isStudent = true;
// delete user.age;
// console.log(user)

// Question 65
// Write a function that takes an object as input and prints all its keys using `Object.keys()`.
// function printkey(user) {
//   console.log(Object.keys(user));
// }
// let user = {
//   name: "Anish",
//   age: 21,
//   city: "Mumbai",
// };
// printkey(user)

// Question 66
// Create an array of book objects, where each object contains a `title` and an `author`.
// const books = [
//   { title: "Eat that frog", author: "Anish Kalambe" },
//   { title: "The Alchemist", author: "Paulo Coelho" },
//   { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
// ];
// console.log(books)

// Question 67
// Access and print the author of the second book from the array of book objects
// const books = [
//   { title: "Eat that frog", author: "Anish Kalambe" },
//   { title: "The Alchemist", author: "Paulo Coelho" },
//   { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
// ];
// console.log(books[1].author)

// Question 68
// Write a function that checks whether a specific key exists inside an object. Print "Key
// exists" or "Key does not exist" accordingly.
// let user = {
//   name: "Anish",
//   age: 21,
//   city: "Mumbai",
// };
// function checkkey(user, key) {
//   if (key in user) {
//     console.log("Key Exist");
//   } else {
//     console.log("Keys Does Not exist");
//   }
// }
// checkkey(user, "date");

// Question 69
// Write a function that returns the total number of keys present in an object.
// let user = {
//   name: "Anish",
//   age: 21,
//   city: "Mumbai",
//   pincode:64
// };
// function totalkeys(user) {
//   console.log(Object.keys(user).length);
// }
// totalkeys(user);

// Question 70
// Use `Object.assign()` to merge an empty object with two existing objects/arrays and print the result.
// let user1 = {
//   name: "Anish",
//   age: 21,
//   city: "Mumbai",
//   pincode: 64,
// };
// let user2 = {
//   pincode: 98,
// };
// const mergedobj = Object.assign({},user1);
// console.log(mergedobj);

