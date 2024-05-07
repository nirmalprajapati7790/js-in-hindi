// console.log("nirmal ji")

// Assingnment operater
// var x = 5
// var y = 5


// console.log( 'both the x and y equal or not ' +  x==y);
// console.log( ' is both the x and y equal : ${x == y}')

// arithmetic operator

// console.log(3+3);
// console.log(9-4);
// console.log(2*3);
// console.log(4/2);
// console.log('remender operater ' + 27%4);

// increment and decrement
// postfix

// var num = 15
// var newNum = num++

// console.log(num);
// console.log(newNum);

// prefix
// var num = 15
// var newNum = ++num

// console.log(num);
// console.log(newNum);

// decrement operater

// postfix

// var num = 15
// var newNum = num--

// console.log(num);
// console.log(newNum);

// prefix
// var num = 15
// var newNum = --num

// console.log(num);
// console.log(newNum);

// comparison operater

// var x = 15
// var y = 12

// console.log(x==y);
// console.log(x != y);
// console.log(x>y);
// console.log(x<y);
// console.log(x=>y);
// console.log(x=>y);

// logical operator

//  And operater &&
// var x = 20
// var y = -10

// console.log(x>y &&  x>=y);

// or operater ||
// var x = 20
// var y = -10

// console.log( x>y || x>y || x<y );

// not operater !
// var a = 25
// var b = 30

// console.log(!(a>b));

// string operater

// var myName = 'nirmal '

// console.log(myName +'prajapat');
// console.log(myName +'kumhar');
// console.log(myName +'machiwal');


//   4 challenge time

// Sol. 1
// console.log(3**3);

// sol. 2

// console.log(10 +'machiwal');

// sol. 3
// var a = 4
// var b = 5

// // output a=5 b=4 swap to number

// var c = b
// b = a
// a = c

// console.log('the value of a is '+ a);
// console.log('the value of b is '+ b);

// sol. 4
// var a = 4
// var b = 5

// output a=5 b=4 swap to number

// a = a + b    
// b = a - b    
// a = a - b

// console.log('the value of a is '+ a);
// console.log('the value of b is '+ b);

// interview question
 
// different by == and ===

// var x = 5
// var y = '5'

// console.log(typeof (x));
// console.log(typeof (y));

// console.log( x == y );


// var x = 5
// var y = '5'

// console.log(typeof (x));
// console.log(typeof (y));

// console.log( x === y );


// 1. if else ************

// var tomr = 'rain'

// if (tomr == 'rain'){
//    console.log('take a raincoat')
// }else{
//     console.log('not take a raincoat')
// }
// qustion

// var year = 2030
// if(year % 4 === 0) {
//     if(year % 100 === 0) {
//         if(year %  400 === 0) {
//             console.log('the year ' + year + ' is leap year');
        
//         }else{
//             console.log('the year ' + year + ' is  not leap year');
//          }
        
//     }else{
//         console.log('the year ' + year + ' is leap year');
//     }
    
// }else{
//     console.log('the year ' + year + ' is  not leap year');
// }

// Sol.2 (0, "", NAN, undefind, false )

// if (score = 0) {
//     console.log(' Yay! won this match');
// } else {
//     console.log('ooh! lost this match');
// }
// sol.3 
// var age = 14

// if (age >= 18) {
//     console.log('you can vote');
// } else {
//     console.log('you cannot vote');
// }


// 3 condition (ternary) operator******


// var age = 18
// console.log((age >= 18) ? 'you can vote' : 'you cannot vote');


// var area = 'reatangle';
// var PI = 3.142, l=5, b=4, r=3;

// if(area == 'circle') {
//     console.log('the aera of the circle ' + PI*r**2);
// } else if(area == 'triangle') {
//     console.log('the aera of the triangle ' + (l*b)/2);
// } else if(area == 'reatangle'){
//     console.log('the aera of the reatangle ' + (l*b));
// }else{
//     console.log('enter the vaild data');
// }


//  3 switch case ******

// var area = 'reatangle';
// var PI = 3.142, l=5, b=4, r=3;


// switch (area) {
//     case 'circle':
//         console.log('the aera of the circle ' + PI*r**2);
//          break;
//     case 'triangle':
//         console.log('the area of the cricle ' + (l*b)/2);
//         break;
//     case 'reatangle':
//         console.log('the area of the cricle ' + (l*b));
//         break;    
//     default:
//         console.log('enter the vaild data');
//         break;
// }

// 4 while loop******

//  var num = 1;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// 5 do while loop********
//  var num = 20;
// do {
//     console.log(num);
//         num++;
// } while (num <= 10);


// 6 for loop *********

// for (let num = 10; num <= 20; num++) {
//     console.log(num);
// }
// challenge time

//  8 ka table

// for (let num = 1; num <= 10; num++) {
//     var tableOf = 8;
//     console.log(tableOf + " * " + num + " = " + 8*num);
// }

// 9 ka table

// for (let num = 1; num <= 10; num++) {
//     var tableOf = 9;
//     console.log(tableOf + " * " + num + " = " + 9*num);
// }

// 12 ka table

// for (let num = 1; num <= 10; num++) {
//     var tableOf = 12;
//     console.log(tableOf + " * " + num + " = " + 12*num);
// }

// ###### functions ********


// 1 function definition

// function sum() {
//     let a = 10; b = 20;
//     let total = a+b;
//     console.log(total);
// }



// 2 calling a function*****

// function sum() {
//     let a = 10; b = 20;
//     let total = a+b;
//     console.log(total);
// }
// sum();

// function perameter vs function argument

// function sum( a, b ) {
//         let total = a+b;
//         console.log(total);
//     }
//      sum (10, 20)
//      sum( 12, 10)
//      sum(2332, 12)

// interview time $$ why functions
    //    function sum( a, b ) {
    //         let total = a+b;
    //         console.log(total);
    //     }
 
    //     var funExp = sum(12, 12)

// 5 return keyword in funtion

// function sum( a, b ) {
//     return total = a+b;

// }

// var funExp = sum(12, 12)
// console.log('two number sum is ' + funExp);

// 6 anonymous function

// var funExp = function( a, b ) {
//         return total = a+b;
//      }
//    var   sum = (12, 12)
//    var  sum1 = (23, 23)

//      console.log(sum < sum1);


                            // ***** welcome to ECMA script *****
                            
// var myName = 'nirmal'
// console.log(myName); 

// myName = 'prajapat'
// console.log(myName);

// let  myName = 'nirmal'
// console.log(myName);

// myName = 'nirmal'
// console.log(myName);

// const myName = 'nirmal'
// console.log(myName);

// myName = 'prajapt'
// console.log(myName);

// function boidata(){
//     const myFirstName = 'nirmal'
//     console.log(myFirstName)

//     if(ture){
//         const myLastName = 'prajapat'
//     }
// }
// console.log(myFirstName);
// boidata();

// 2 template literals (template String)


// for(let num = 1; num <= 10; num++){
//     let tableOf = 12;
//     console.log(tableOf + " * " + num  + " = " + tableOf*num);
// }
// out 12 * 1 = 12
// 12 * 2 = 24
// 12 * 3 = 36
// 12 * 4 = 48

// 3 default perameters

// function mult( a,b=10 ){
//     return a*b;
    
// }
// console.log(mult(10));

// 6 Fat Arror function***

// normal form of a function sum\\\\\\\\\\\

// console.log(sum());

// function sum() {
//     let a = 2; b = 3;
//     let sum = a+b;
   
//     console.log("sum of two number " + sum);
    
// }

// convrt into fat arror function 

// const sum = () => {
//     let a = 2; b = 3;
//     console.log("sum of two number " + ((a=2)+ (b=3)));
// }

// console.log(sum());

// **************section 7 Arrays in javascript**************

// var myName = ['nirmal', 'ajay', 'golu', 'viny']

// console.log(myName[myName.length-1]);

// console.log(myName.length);

// use to for loop

// let myName = ['nirmal', 'ajay', 'golu', 'viny']

// for (let i = 0; i < myName.length; i++) {
    
//     console.log(myName[i]);
// }
// use to for in loop

// let myName = ['nirmal', 'ajay', 'golu', 'viny']

// for (let element in myName) {
    
//         console.log(element);
//     }

// use to for of loop

// let myName = ['Nirmal', 'Ajay', 'Golu', 'Viny']

// for (let Element of myName ) {
//     console.log(Element);
    
// }

// use in array.prototype.foreach 

// let myName = ['Nirmal', 'Ajay', 'Golu', 'Viny']

//  myName.forEach(function (element, index, Array){
    
//     console.log(element + ' index' + ' : ' + index +"  "+ Array);
// });

// faat arorr function 

// let myName = ['Nirmal', 'Ajay', 'Golu', 'Viny']

//  myName.forEach((element, index, Array) => {
    
//     console.log(element + ' index' + ' : ' + index +"  "+ Array);
// });





// Array . prototype. push()

// const animals = ['goat', 'pigs', 'sheep'];

// const count = animals.push('cows', 'cat', 'hen');
// console.log(animals);
// console.log(count);


// Array . prototype. pop()

// const animals = ['goat', 'pigs', 'sheep', 'cows'];

// animals.pop('cows');
// console.log(animals);

// Array.prototype.shift

// const animals = ['goat', 'pigs', 'sheep', 'cows'];

// animals.shift()                        // jo first Element hai us ko delete kar deta hai
// console.log(animals);


// Array.prototype.unshift

// const animals = ['goat', 'pigs', 'sheep', 'cows'];

// animals.unshift('cats', 'cows', 'many more')

// console.log(animals);

// 2nd example 

// const number = [1, 2, 3, 5, ]

// number.unshift(4, 6);
// console.log(number);

// challenge time

// const months = ['jan', 'march', 'june', 'july'];

// sol.1

// const newMonth = months.splice(5, 0, 'dec');
// console.log(months);

// sol.2
// const newMonth = months.splice(5, 0, 'dec');
// console.log(newMonth);

// sol.3 
// const newMonth = months.splice(1, 1, 'March');
// console.log(months);

// sol.4

// const newMonth = months.splice( 2, 1);
// console.log(months);

                //   ***************map of reduce methods*************same  use of react**********************************

// Array. prototype. Map()

const array1 = [ 1, 2, 3, 4, 12, 17]

// let newArr = array1.map(( element, indix, arr) =>{
//     return  element < 5;
// });
// console.log(array1);
// console.log(newArr)

let newArr = array1.map(( element, index, arr) =>{
    return 'index no.' + ' = ' + index + ' and the value is ' + element + ' belong to ' + arr;
});

console.log(newArr);