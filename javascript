//-------------Task 3 program 1-------------------
function modulas(divident,divisor){
    let questant=parseInt(divident/divisor);
    let reminder=divident-(questant*divisor);
    return reminder;
}
console.log(modulas(218,5));

//-------------Task 3 program 2-------------------
function firstArr(a,b){
  return function(c,d){
    return function (e,f){
       return (a*c*e)+(b*d*f);
    }
  }
}
console.log("the multiplication are :",firstArr(10,2)(5,0)(2,3));

//-------------Task 3 program 3-------------------
function fun1(arr) {    
    return function (i) {
    let arrMul = arr.map(arr => arr * i);
    return arrMul;
    }
}
const resultFunction = fun1([10, 20, 30, 40, 50]);
console.log(resultFunction(5))



