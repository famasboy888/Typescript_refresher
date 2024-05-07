let code:number =123_245_789;

console.log(code);

let arryNum: [number, string, object] = [
    1,
    'Batman',
    { description: 'dark Knight' }
];

arryNum.forEach(n => { console.log(n) });

const enum Size {
    Small = 'S',
    Medium = 'M',
    Large = 'L'
}

let mySize: Size = Size.Medium
console.log(mySize);


const multiplyByTwo = (value: number, name: string = 'John doe'): number => {
    if (name) {
        console.log(name)
    }
    return value * 2;
}
console.log(multiplyByTwo(2));
console.log(multiplyByTwo(2, 'Batman'));

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


type Customer = {
    birthday: Date
}

const getNumber = (num: number): Customer | null | undefined => {
    return num?{birthday:new Date}:null;
}

const cust = getNumber(1); 
console.log(cust?.birthday);
