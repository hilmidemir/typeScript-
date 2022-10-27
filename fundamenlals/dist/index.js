"use strict";
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.3;
    return income * 1.2;
}
calculateTax(10000);
let date = '12.11.2022';
let employee = {
    id: 1,
    name: 'Eşşşşek',
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=index.js.map