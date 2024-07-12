// destructuing objects

// const person ={
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// const { name, age, city } = person; // this destructes the object into its three parts

// console.log(age);

// let currentCustomer = name;
// console.log(currentCustomer);

// const employee = {
//     id: 101,
//     name: "Alice",
//     address: {
//       street: "123 Main St",
//       city: "Springfield",
//       country: "USA"
//     }
//   };

//   const { id, name, address:{ street, city, country }} = employee; // using the nested address:{ street, city, country }

//   console.log(street);

//   const settings = {
//     theme: "dark",
//     fontSize: 16
//   };

//   const { theme, fontSize, language = 'English' } = settings;

//   console.log(language)


//   const user = {
//     username: "jsmith",
//     email: "jsmith@example.com",
//     role: "admin"
//   };

//   function displayUser({ username, role }) {
//     console.log(username, role)
//   }

//   displayUser(user);

// const products = [
//     { name: "Laptop", price: 899 },
//     { name: "Phone", price: 599 },
//     { name: "Tablet", price: 399 }
//   ];

//   for (const { name, price } of products){ // 
//     console.log(name, price);
//   }
