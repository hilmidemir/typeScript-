


/********    ENUMS    ***************/

const small = 1
const medium = 2
const large = 3

const enum size { Small = 1, Medium = 2, Large = 2}
let mySize: size = size.Medium

console.log(mySize);


/********************   Functions and veriables  *****************/

function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear < 2022) 
        return income * 1.3
    return income * 1.2
}

calculateTax(10_000); // if we write a year it s override 2022 


/**************************** objects ******************/

type Employee = {
    readonly id: number, 
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Eşşşşek',
    retire: (date: Date) => {
        console.log(date);
    }
}


/*************    Union Type        ************/

function kgToLbs(weight: number | string):number {
    // narrowing
    if(typeof weight === 'number')
        return weight * 2.2;
    else 
        return parseInt(weight) * 2.2
}

kgToLbs(10);
kgToLbs('10kg')


/***************    Intersection Type    *************/