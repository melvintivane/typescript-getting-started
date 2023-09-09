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
