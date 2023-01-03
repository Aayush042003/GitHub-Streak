// For Loop
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
console.log("For Loop : ");
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
// For in Loop
console.log("For In Loop :");
const person = {fname:"John", lname:"Doe", age:25}; 
for (let x in person) {
  console.log(person[x]);
}
// For Of Loop
console.log("For Of Loop :");
const Students = ["Ambuj", "Aaryan", "Ashish"];
for (let x of Students) {
    console.log(x);
}
// While Loop
console.log("While Loop :");
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
