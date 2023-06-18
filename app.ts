// BASIC CONCEPTS
// 1 - Define a strict type
// 2 - Use the same type throughout coding

let variable = "hello";
variable = "hi";

let age = 19;
// age = "nineteen";
age = 14;

let ageWhithType: number = 14;
// ageWhithType = "nineteen";
ageWhithType = 19;

let testString: string;
testString = "hello";

let testBoolean: boolean;
testBoolean = true;


// UNION TYPES
let testStringOrNumber : string | number;
testStringOrNumber = "nineteen";
testStringOrNumber = 19;
// testStringOrNumber = [];


// ARRAYS
let names = ["Melvin", "Messias", "Tivane"];
// names.push(5);
names.push("Mello");

let numbers = [11, 22, 33];
// numbers.push(true);
numbers.push(12);

let testStringArray : string[];
// testStringArray = [1, 2, 3];
testStringArray = ["One", "Two", "Three"];

let testNumberArray : number[];
// testNumberArray = [true, "Hi", 23];
testNumberArray = [12, 15, 58];

let testStringOrNumberArray : (string | number)[];
testStringOrNumberArray = [1, "Two", 3];


// OBJECTS
let user = {
    username: "john",
    age: 22,
    isAdmin: false,
}

user.username = "jane";
// user.age = "eighteen";
user.age = 18;
// user.isAdmin = "no";
user.isAdmin = false;


//IN THIS CASE, WE HAVE TO USE ALL PROPERTIES OF THIS OBJECT 
let userObject : {
    username: string;
    age: number;
    isAdmin: boolean;
}

userObject = {
    username: "john",
    age: 23,
    isAdmin: true,
    // phone: "+258 84 207 4393"
}


//IN THIS CASE, THE USAGE OF PROPERTY "PHONE" IS OPTIONAL
let userObject2 : {
    username: string;
    age: number;
    isAdmin: boolean;
    phone?: string
}

userObject2 = {
    username: "john",
    age: 23,
    isAdmin: true,
}


// ANY TYPE
// It's recommended to use any type when you are not sure which type is expected 
let testAny : any; 

testAny = 12;
testAny = "Hello";
testAny = true;
testAny = [];
testAny = {};

let testAnyArray : any[];
testAnyArray = [1, "two", false, [], {}];


//FUNCTIONS
//Function without return
let sayHi = () => {
    console.log("Hi, welcome!");
}

// sayHi = "Hi";

//Function with return
let functionReturnString = () : string => {
    return "Hello";
}

//Function with argument
let multiple = (number: number) => {
    return number * 2
}

let multiple2 = (number: number) : number => {
    return number * 2
}

let multiple3 = (number: number) : void => {
    number * 2
}

let sum = (number1: number, number2: number, another?: number ) => {
    return number1 + number2;
}

sum(2, 2);

//This function can be improved by using "type aliases"
let functionUser = (user: {username: string, age: number, phone?: string}) => {
    console.log(user.phone);
}


// TYPE ALIASES
type UserType = {
    username: string;
    age: number;
    phone: string;
}

let improvedFuction = (user: UserType) => {
    console.log(user.username);
}

//Function signature
type signatureFunction = (a: number, b: string) => void;

let write: signatureFunction = (num, str) => {
    console.log(num + " times " + str);
}

type UserType2 = {
    username: string;
    age: number;
    phone: string;
    theme: "dark" | "light"
}

const userWithTheme : UserType2 = {
    username: "John",
    age: 52,
    phone: "+258 84 207 4393",
    // theme: "pink",
    theme: "light"
}


// INTERFACES
interface IUser {
    username: string,
    email: string,
    age: number,
}

interface IEmployee extends IUser {
    employeeId: number,
}

const employee : IEmployee = {
    username: "Brad",
    email: "brad@email.com",
    age: 43,
    employeeId: 2,
}

const client : IUser = {
    username: "Jane",
    email: "jane@email.com",
    age: 25,
}


// GENERICS
interface IAuthor {
    id: number,
    username: string,
}

interface ICategory {
    id: number,
    title: string,
}

//There is nothing wrong with this approach, but it can be improved using (type parameter) generics
interface IPost {
    id: number,
    title: string,
    desc: string,
    extra: IAuthor[] | ICategory[],
}

const test : IPost = {
    id: 2,
    title: "Post title",
    desc: "Post desc",
    extra: [{id: 1, title: 'teste'}, {id: 2, title: 'teste2'}],
}

interface IPostBetter<T> {
    id: number,
    title: string,
    desc: string,
    extra: T[]
}

const testMe : IPostBetter<String> = {
    id: 1,
    title:"Post title",
    desc: "Post desc",
    extra: ['String from parameter', 'String from parameter2']
}

//In this case I can't use string, number or boolean. It should be an object
interface IPostEvenBetter<T extends object> {
    id: number,
    title: string,
    desc: string,
    extra: T[]
}

const testeMe2 : IPostEvenBetter<IAuthor> = {
    id: 1,
    title: "Post title",
    desc: "Post description",
    extra: [{id: 1, username: 'mello'}]
}

const testeMe3 : IPostEvenBetter<ICategory> = {
    id: 1,
    title: "Post title",
    desc: "Post description",
    extra: [{id: 1, title: 'category title'}]
}
