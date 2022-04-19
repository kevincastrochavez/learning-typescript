let age: number;
age = 12;

let userName: string;
userName = 'Kevin';

let isStudent: boolean;
isStudent = true;

// Types in arrays
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

// Define the type of an object
let person: {
  name: string;
  age: number;
};

person = {
  name: 'Kevin',
  age: 25,
};

// Array of objects
let people: {
  name: string;
  age: number;
}[];

// Type inference (best practice)
let course = 'React';
// course = 12341; It won't reassing

// Union types (allows yo to include more than one type)
let random: string | number = 'Hello';
random = 12341;
