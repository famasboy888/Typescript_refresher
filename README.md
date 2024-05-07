# TypeScript Refresher

### Built-in Types:

| Javascript | Typescript |
| ---------- | ---------- |
| number     | any        |
| string     | unknown    |
| boolean    | never      |
| null       | enum       |
| undefined  | tuple      |
| object     |            |

### Declaring numbers:

```typescript
let code: number = 123245789;
```

Or we can put `_` to make it readable
```typescript
let code: number = 123_245_789;
```

### Arrays:

```typescript
let arryNum: number[] = [1, 2, 3];

arryNum.forEach(n => { console.log(n) });
```

### Tuples:

`tuples` are fixed length of arrays with fixed value type for each index.

_Restrict tuples to only 2 indexes to maintain readability. Maybe take it for key-value pairs._

```typescript
let arryNum: [number, string, object] = [
    1,
    'Batman',
    { description: 'dark Knight' }
];

arryNum.forEach(n => { console.log(n) });
```
Output
```bash
$ npx ts-node index.ts 

1
Batman
{ description: 'dark Knight' }
```

### Enum:

`enums` represents a group of related constants.

```typescript
enum Size {
    Small = 'S',
    Medium = 'M',
    Large = 'L'
}
console.log(Size.Large);
```

We can also make `enum` as a variable type:

```typescript
enum Size {
    Small = 'S',
    Medium = 'M',
    Large = 'L'
}

let mySize: Size = Size.Medium
console.log(mySize);
```

---

### Functions
This is how we can decalre functions in Typescript

```typescript
const multiplyByTwo = (value:number): number =>{
    return value*2;
}
console.log(multiplyByTwo(2));
```

If we want to supply an `optional parameter`, we will use `?`

```typescript
const multiplyByTwo = (value: number, name?: string): number => {
    if (name) {
        console.log(name)
    }
    return value * 2;
}
console.log(multiplyByTwo(2));
console.log(multiplyByTwo(2, 'Batman'));
```

We can also pass a default value `John doe`:

```typescript
const multiplyByTwo = (value: number, name: string = 'John doe'): number => {
    if (name) {
        console.log(name)
    }
    return value * 2;
}
console.log(multiplyByTwo(2));
console.log(multiplyByTwo(2, 'Batman'));
```

### Objects

We can explicitly decalre a type annotation in objects using this:

```typescript
let employee:{
    id: number,
    name: string
    position: string
}

employee = {
    id: 123,
    name: 'Batman',
    position: 'security'
}

console.log(employee);
```

We can also decalre for a property to be read-only: Using `readonly`

```typescript
let employee:{
    readonly id: number,
    name: string
    position: string
}
```

---
# Advance Types

### Type Alias

We can decalre a `type` alias following this example:

```typescript
type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => string        //Accepts date parameter and returns a string
}

const emp: Employee = {
    id: 123,
    name: 'Batman',
    retire: (date) =>{
        return `hello, today's date is ${date}`;
    }
}

console.log(emp.retire(new Date));
```

### Union Types

`union` allows parameter or variable to have more than 1 type. We use `|` symbol

```typescript
const kgToLbs = (weight: number | string): number => {
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

console.log(kgToLbs(10));
console.log(kgToLbs('22'));
```

### Intersection Types

`intersection` allows multiple types to be combined suing `&` symbol

```typescript
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

const UiWidget: Draggable & Resizable = {
    drag() { },
    resize() { },
}
```

### Literal types

Literal types or exact value only allows specific values for a variable. Like this example.

```typescript
// Literal types of exact types
type Metric = 'mm' | 'cm' | 'km';
const measure: Metric = "km";
```

### Optional or Chaining operator

Add `?` to use the _**Optional Property Access Operator**_ which allows to access a property if you are unsure if it returns null or undefined.

```typescript
type Customer = {
    birthday: Date
}

const getNumber = (num: number): Customer | null | undefined => {
    return num?{birthday:new Date}:null;
}

const cust = getNumber(1); 
console.log(cust?.birthday);
```
