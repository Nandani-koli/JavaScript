// npm i typescript 
// npx tsc init 
// tsc app.js
// npx tsc --watch

//nodejs covert typescript code in javascript so if we create a app.ts it will create a app.js 
//typescript uses typescript compiler 
// write tsc --watch it will compile the code and run it automatically
// TypeScript is a superset of JavaScript that adds optional static typing and other features to improve the development experience.

//// TypeScript Data Types

// Number
// var num: number = 12;

// String
// var str: string = 'Hello, World!';

// Boolean
// var bool: boolean = true;

// Array
// var arr: number[] = [1, 2, 3];

// Tuple , it is fixed size array 
// var tup: [number, string] = [1, 'Hello'];

// Enum
// enum Color { Red, Green, Blue }
// var color: Color = Color.Green;

// Any
// var any: any = 'Hello';

// Void
// function voidFunc(): void {
//     console.log('Void function');
// }

// Null and Undefined
// var nullVar: null = null;
// var undefinedVar: undefined = undefined;

// Never
// function neverFunc(): never {
//     throw new Error('Never function');
// }

// Object
// var obj: object = { name: 'John', age: 30 };

// Symbol
// var sym: symbol = Symbol('Symbol');

// primitive and refrence types
// Primitive Types
// In TypeScript, primitive types are the basic data types that are not objects.
// They are immutable, meaning their values cannot be changed once they are created.
// Examples of primitive types include:
// - Number
// - String
// - Boolean
// - Null
// - Undefined
// - Symbol

// Reference Types {} [] () 
// In TypeScript, reference types are objects that are stored in memory as references.
// They are mutable, meaning their values can be changed after they are created.
// Examples of reference types include:
// - Array
// - Object
// - Function
// - Class instances
//  example :-
// var a =[1,2,3,4];
// var b = a;
// console.log(a,b); b store refrence of a not copy a 

//Unknow Type in TS 
// Unknown Type in TS
// The unknown type is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn't assignable to anything except any itself.
// var a: unknown = 10;

// if(typeof a === 'string'){
// a.toUpperCase()
// }

//// Inference and Type Annotation in TypeScript

// Type Inference
// TypeScript can automatically infer the type of a variable based on its assigned value.
// For example:
var num = 12; // TypeScript infers the type of num as number

// Type Annotation
// Type annotation is the process of explicitly specifying the type of a variable.
// For example:
var num: number = 12; // Explicitly specifying the type of num as number

// // Interface in TypeScript
// An interface is a way to define the shape of an object, including the names of its properties and the types of their values.
// It is used to define a blueprint of an object.

// Defining an Interface
// interface Person {
//   name: string;
//   age: number;
// }

// Using an Interface to Define an Object
// var person: Person = {
//   name: 'John Doe',
//   age: 30
// };

// Using an Interface with Optional Properties
interface PersonOptional {
  name: string;
  age?: number;
}

var personOptional: PersonOptional = {
  name: 'John Doe'
};

// Using an Interface with Read-only Properties
interface PersonReadOnly {
  readonly name: string;
  age: number;
}

var personReadOnly: PersonReadOnly = {
  name: 'John Doe',
  age: 30
};

// personReadOnly.name = 'Jane Doe'; // Error: Cannot assign to 'name' because it is a read-only property.

// function abcd (obj:Object) {
//     console.log(obj);
// }

interface User {
    name: string;
    gender : string;
}
function abcd (obj:User) {
    console.log(obj);
}

// abcd({name : "sdjas"}) it is correct 

// abcd ({name : "sdjas", age : 25}); // this one give error cause age is not define 

//but if we write like this above console will work 

interface User {
    name: string;
    age?: number;
}

// we have define User interface 2 times so it means it merge it in User basically it will take properties which we write in both 

// abcd({name : "sdjas"})

// interface extend so new admin interface extend user which means it has its own property as well as properties of user as well

interface Admin extends User {
    admin : boolean;
}

// function uio(obj : Admin) {
    
// }

//Type aliases : we can define our own custom types 

type value = number | string | null ; // it is type alias for value which can be number or string

let a : value;

type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20
};

// Intersection in TypeScript
// Intersection types allow us to combine multiple types into one type that has all the properties of the individual types.
// It is denoted by the '&' operator.

// Example:
type Circle = {
  radius: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Circle & Rectangle;

// Shape type now has all the properties of Circle and Rectangle
const shape: Shape = {
  radius: 10,
  width: 20,
  height: 30
};


// Union Type in TypeScript
// The union type is a way to combine multiple types into one type that can be any of the individual types.
// It is denoted by the '|' operator.
// For example:
type UnionType = number | string | null;
// The UnionType can be either a number, a string, or null.


// Classes in TypeScript
// A class is a blueprint for creating objects.
class Person {
  public value : string;

  constructor(public name: string, public age: number,public v2 : string = "89") {
    this.value = "asd"
  }
}

class Person2 {
  
  public name 
  public age 

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

}

// person & person2 both declaraation are correct & same 

// Creating an Object from a Class
let eee = new Person('John Doe', 30);


class ABC {
  private name: string;
  protected age: number;
  public value: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.value = "asd"
  }

  public printName() {
    console.log(this.name); // accessible
    console.log(this.age); // accessible
    console.log(this.value); // accessible
  }
}

class Employee extends ABC {
  constructor(name: string, age: number) {
    super(name, age);
  }

  public printAge() {
    // console.log(this.name); // Error: Property 'name' is private and only accessible within class 'ABC'.
    console.log(this.age); // accessible
    console.log(this.value); // accessible
  }
}

let p1 = new ABC('John Doe', 30);
// console.log(p1.name); // Error: Property 'name' is private and only accessible within class 'ABC'.
// console.log(p1.age); //  Error: Property 'age' is private and only accessible within class 'ABC' & its subclasses.
console.log(p1.value); // accessible

//Getters & Setters 
class EMP {
  private _name: string = "oopopo";

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
let emp1 = new EMP();
console.log(emp1.name); // oopopo
emp1.name = "nandani"
console.log(emp1.name); // nandani

// Static members of a class in TypeScript are shared by all instances of the class and can be accessed without creating an instance of the class. They are essentially global variables and functions that are scoped to the class.
class StaticExample {
  static staticProperty: string = "I'm a static property";
  static staticMethod(): void {
    console.log("I'm a static method");
  }
}

console.log(StaticExample.staticProperty);
StaticExample.staticMethod();


//define functions type 

function abc (a : string , cb : (ab : string) => void) : [number,string]{
  cb("op")
  return [0,"asdas"];
}

abc("opopo",(ab : string) => {
  console.log(ab)
})

// ... rest/spread 
function sum(...arg : number[]) { //... is rest operator 
  console.log(arg)
}

sum(1,2,3,4,5,6,7,8,9)

let ar  =[ 1,2,3,4,5,6,7,8,9];
let ar2 = [...ar]; // ... is spread operator

//function overloading 
function calculateArea(shape: 'rectangle', width: number, height: number): number;
function calculateArea(shape: 'circle', radius: number): number;

function calculateArea(shape: string, ...args: number[]): number {
  if (shape === 'rectangle') {
    return args[0] * args[1];
  } else if (shape === 'circle') {
    return Math.PI * args[0] ** 2;
  } else {
    throw new Error('Invalid shape');
  }
}

//generic function 
// Generic Function in TypeScript
// A generic function is a function that can work with multiple types of data, without the need to rewrite the function for each type.
// It allows us to create reusable functions that can work with different types of data, while maintaining type safety.

// Example:
function identity<T>(arg: T): T {
  return arg;
}

// The identity function takes a type parameter T, which can be any type.
// The function takes an argument of type T and returns a value of type T.
// This allows us to use the function with different types of data, while maintaining type safety.

// For example, we can use the function with a string:
let result1 = identity<string>('hello');
console.log(result1); // Output: hello

// We can also use the function with a number:
let result2 = identity<number>(42);
console.log(result2); // Output: 42

identity('hello') //this will also work correct 

function log<T>(val : T)
{
  console.log(val);
}
log("kuch bhi likh skte hai ")

//generic interface 
interface HBH<T> {
  key : T,
  age : number
}

function hbh(obj : HBH<string>) : void {
  console.log(obj.key, obj.age);
}

//generic classes 
class BottleMaker<T> {
  constructor(public name : T) {}
}

let b1 = new BottleMaker<string>("hbh");
let b2 = new BottleMaker<number>(1);

function newfun<T>(a: T, b : T) : T {
  // return a 
  // return b 
  // return "asdas" //give an error 
  // return "hey" as T ;
  return <T>"hey";

}

newfun<string>("new","stringliteral");

// Type Assertion in TypeScript
// Type assertion is a way to tell TypeScript that we know better than it does about the type of a value.
// It is used to override the type checking of TypeScript and to tell it that we know the type of a value.
// It is denoted by the 'as' keyword.

// Example:
let str: any = 'Hello, World!';
let len: number = (str as string).length; // Type assertion

// Another example:
let str2: any = 'Hello, World!';
let len2: number = (<string>str2).length; // Type assertion

// Type Casting in TypeScript
// Type casting is a way to convert a value from one type to another.
// It is used to tell TypeScript that we know the type of a value, even if it doesn't know.

// Example:
let str3: any = 'Hello, World!';
let len3: number = (str3 as string).length; // Type casting
// or 
let len5 = Number(str3); // Type casting

//non null assertion operator 
let v : null | undefined | string;
let v2 = v!; // non null assertion operator means that v is not null or undefined

// Type Guards / Type narrowing in TypeScript
// A type guard is a function that narrows the type of a value within a specific scope.
// It is used to provide more precise type information to TypeScript.

// Example:
function isString(value: string | number | any): value is string {
  return typeof value === 'string';
}

// The 'is' keyword is used to define a type guard.
// The type guard function returns a boolean value indicating whether the value is of the specified type.

// Using the type guard:
let value: string | number = 'hello';
if (isString(value)) {
  console.log(value.toUpperCase()); // value is string
} 

//instanceof
class TVremote {
  switchtvoff()
  {
    console.log("switching tv off")
  }
}

class CARremote {
  switchcaroff()
  {
    console.log("switching tv off")
  }
}

let t1 = new TVremote()
let c1 = new CARremote();

function switchoff (remote : TVremote | CARremote) {
  if(remote instanceof TVremote) {
    remote.switchtvoff()
  }else if(remote instanceof CARremote) {
    remote.switchcaroff()
  }
}

