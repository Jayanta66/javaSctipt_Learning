console.log("Hellow world");


//Varriable name conventions
let firstName ="Matilda";
let first ="jonas";
console.log(firstName);


//Assignment 1
console.log("Assignment 1")
console.log("#####################################################");

console.log("Values and Variables Declare variables called country, continent and population and assign their values according to your own country.Log their values to the console.");
console.log("#####################################################");

let country = "India";
let continent = "Asia";
let population = 10000000;

console.log(country,continent,population);
console.log(country);
console.log(continent);
console.log(population);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Jonas");

//dynamic typeing
javaScriptIsFun = 'Yes';
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
console.log("#####################################################");


console.log("        ")
console.log("#####################################################");
console.log("let , const , var ");
//let , const , var 

//mutabe(can be change)
let age =30;
age = 31;

//immutable(can not be change)
const birthYear = 1991;
//birthYear = 1992;


var job="programmer";
job='teacher';

//Operators
console.log("        ")
console.log("#####################################################");
console.log("Operators");

//Math Operators
console.log("Math Operators");
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);


//Assignment Operators
console.log("Assignment Operators");
let x = 10 + 5;
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *=4
console.log(x);
x /=4;
console.log(x);
x++
console.log(x);
--x
console.log(x);
--x
console.log(x);


//Comparison Operators (>, < , >= , <=)
console.log("Comparison Operators  >, < , >= , <=");
console.log(ageJonas > ageSarah);
console.log(ageJonas >= ageSarah);
const isFullAge = ageSarah >= 18;


//Operator Precedence 
console.log("Operator Precedence ");
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let a,y;
a = y = 25 - 10 - 5;
console.log(a,y);

const avarageAge = ageJonas + ageSarah / 2;
console.log(ageJonas,ageSarah,avarageAge);

//Coding Chalange : 1
// console.log("Coding Chalange : 1");
// const massMark = 78;
// const heightMark= 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark,BMIJohn,markHigherBMI);


//String and Template Literals
console.log("String and Template Literals");

const jonas = "I'm "+firstName;
console.log(jonas);

const jonass = "I'm ${firstName}";
console.log(jonas);

//multiline
console.log("multiline \n\in \n\javaScript");

//If Else
console.log("If Else");

const agee = 15;

const isOldEnough = age >=18;
if(isOldEnough){

    console.log("Sarah can start driving license");
}


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if(BMIMark >BMIJohn ){
    console.log("Mark's BMI is higher than John");

}else{
    console.log("John's BMI is higher than Mark");

}



//Conversion and coercion


//type Conversion 
console.log("If Else");

const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear+18);


//type coercion(different types together)

console.log("I am"+23+" years old.");

let n = '1'+1;
n = n+1;
console.log(n);

//Truthy and Falsy value
console.log("Truthy and Falsy value");

// 5 falsy value
console.log('5 Falsy value : 0, "", undefined, null, NaN ');
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(''));


const money =0;
if(money){
console.log("Don't spend it all");

}else{
    console.log("You should get a job");

}

//Logical Operator
console.log("Logical Operator");

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense);


//Coding Challange :3
console.log("Coding Challange : 3");
const scoreDolphins =(97 + 112 + 80) / 3;
const scoreKoalas =(103 + 95 + 50) / 3;
console.log(scoreDolphins,scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){

    console.log("Dolphins win the trophy");
}else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log('Koalas win the trophy');
}else if(scoreDolphins > scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log('Both win the trophy');
}else{
    console.log('No one win the trophy');

}

//Switch
console.log("Switch");

const day = 'tuesday';
switch(day){

    case 'monday':
        console.log("Plan course structure");
        console.log("Go to code meetup");

        break;
    case 'tuesday':
        console.log("Preapare theory videos");
        break;    
    case 'wednesday':
        console.log("");
        break;
    case 'thursday':
        console.log("Write code examples");
        break;    
    case 'friday':
        console.log("Records videos");
        break;   
    case 'satarday':
        console.log("Plan course structure");
        break;
    case 'sunday':
        console.log("Enjoy Week end");
        break;
    default :
        console.log("Not a vaild day!!");

}


//Ternary Operator
console.log("Ternary Operator");

const ageee = 23;
ageee >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");



//Coding Challenge : 4
console.log("Coding Challenge : 4");
const bill = 273;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log( `${bill}`);
