let age: number;
age = 12;

let userName: string;
userName = 'Kevin';

let isStudent: boolean;
isStudent = true;

// Types in arrays
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

// Type aliases (using same structure for different instances)
type Person = {
  name: string;
  age: number;
};

// Define the type of an object
let person: Person;

person = {
  name: 'Kevin',
  age: 25,
};

// Array of objects
let people: Person[];

// Type inference (best practice)
let course = 'React';
// course = 12341; It won't reassing

// Union types (allows yo to include more than one type)
let random: string | number = 'Hello';
random = 12341;

// Functions and types
// function add(a: number, b: number): number | string {
function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics (helps you write functions type safe yet flexible)
// Typescript looks at the type of the parameters

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

// Classes and Interfaces
class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student('Kevin', 'Castro', 25, ['React']);
student.enroll('Angular');
