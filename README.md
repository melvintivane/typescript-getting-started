# TypeScript Basics

This is a repository that demonstrates basic concepts of TypeScript, a strongly typed programming language. The example code introduces how to define strict types, use types throughout code, work with union types, arrays, objects, functions, type aliases, interfaces, and generics.

## Strict Types

In TypeScript, it is a practice to define strict types and use them consistently throughout your code. This helps avoid type errors.

- `let variable: string = "hello";`: Defines a variable with a strict type.
- `let age: number = 19;`: Example of a strict numeric variable.
- `let testString: string;` and `let testBoolean: boolean;`: Declaration of variables without assigning an initial value.

## Types of Union

Union types allow a variable to have more than one possible type.

- `let testStringOrNumber: string | number;`: Example of a variable that can be a string or a number.

## Arrays

Arrays can contain values ​​of the same type.

- `let names: string[] = ["Melvin", "Messias", "Tivane"];`: Example of an array of strings.
- `let numbers: number[] = [11, 22, 33];`: Example of an array of numbers.

## Objects

Objects can have properties with strict types.

- `let user = { username: "john", age: 22, isAdmin: false };`: Example of an object with typed properties.
- `let userObject: { username: string; age: number; isAdmin: boolean; }`: Strict definition of an object type.

## Any type

The `any` type is used when the exact type is not known.

- `let testAny: any;`: Example of a variable with type `any`.

## Functions

Functions can have strict types for arguments and returns.

- `let sayHi = (): void => { console.log("Hi, welcome!"); }`: Example of a non-return function.
- `let functionReturnString = (): string => { return "Hello"; }`: Function that returns a string.
- `let multiple = (number: number): number => { return number * 2; }`: Function that accepts and returns numbers.

## Type Aliases

Type aliases allow you to create custom names for types.

- `type UserType = { username: string; age: number; phone: string; }`: Example of a type alias.

## Interfaces

Interfaces define the structure of objects.

- `interface IUser { username: string; email: string; age: number; }`: Example of an interface.
- `interface IEmployee extends IUser { employeeId: number; }`: Interface inheritance.

## Generics

Generics allow you to create types that can be reused with different types.

- `interface IPostBetter<T> { id: number; title: string; desc: string; extra: T[] }`: Example of a generic interface.

## Usage

This example code demonstrates basic TypeScript concepts. Use it as a reference to understand how to work with types, functions, objects, and more in TypeScript.

## Contribution

Feel free to contribute improvements, bug fixes or add more examples. Open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
