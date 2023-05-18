// Data types
//  string
//  number
        // ----> integer 1, 2, 3, 4, 5
        // ----> float  1.5, 2.5, 3.5, 4.5, 5.5
//  boolean
        // ----> true
        // ----> false
//  null
//  undefined
//  object
//  array
//  tuple
//  enum
//  any
//  void
//  never

//  Arithmetic operators
//  + ---> Sum
//  - ---> Subtraction
//  * ---> Multiplication
//  / ---> Division
//  ** --> Exponentiation
//  % ---> Modulus
//  // ---> Floor division


// Conditionals

// Logical operators
//  && --> AND
//  || --> OR
//  !  --> NOT


// Conditional operators
//  =  --> Assignment
//  == --> Equal
//  === --> Identical
//  != --> Not equal
//  !== --> Not identical
//  >  --> Greater than
//  <  --> Less than
//  >= --> Greater than or equal to
//  <= --> Less than or equal to


function AngelesCanGoOut(): void{
    // const isDay = true;
    // const isNear = true;
    // const isNotRaining = true;
    // const canGoOut = isDay || isNotRaining;
    const name = 'Angeles Elisa Jimenez';
    const a = true

    const isNight = false;
    if (!isNight) {
        console.log('Angeles puede salir');
    }
};

function Sum(): number{
    const number1: number = 5;
    const number2: number = 10;

    return (number1 + number2);
}

function isYearPair(year: number): boolean{
    if (year % 2 == 0){
        return true;
    }
    
    return false;
};


function sumTwoNumbers(a: number, b: number): number{
    return a + b;
}

function greetByName(name: string): string{
    return `Hello ${name}`;
}

export default function test() {

    const result = sumTwoNumbers(3, 5);
    const greeting = greetByName('Belem');
    const greeting2 = greetByName('Angeles');
}