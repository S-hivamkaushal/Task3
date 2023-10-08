//-------------Task 3 program 1-------------------
function modulas(divident,divisor){
    let questant=parseInt(divident/divisor);
    let reminder=divident-(questant*divisor);
    return reminder;
}
console.log(modulas(218,5));
//-----------------------------------------------------

//-------------Task 3 program 3-------------------
function fun1(arr) {    
    return function (i) {
    let arrMul = arr.map(arr => arr * i);
    return arrMul;
    }
}
const resultFunction = fun1([10, 20, 30, 40, 50]);
console.log(resultFunction(5))



