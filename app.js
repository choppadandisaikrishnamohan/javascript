function external(){
    alert("this is internal js");
}
//datatypes in js
//number datatype
let year = 2025;
console.log(year);

let percentage=49.56;
console.log(percentage);
//string in datatype
let personFirstName="PAWAN"
console.log(personFirstName);
let personLastName="KALYAN"
console.log(personLastName);

let fulName=personFirstName+" "+personLastName;
console.log(fulName);

let institute="BVRIT, NARSAPUR";
let instituteData=`Welcome to ${institute}!`;
console.log(instituteData);
console.log(institute.length);
console.log(institute[4]);
console.log(institute.slice(0,5));
console.log(institute.toLowerCase());
console.log(institute.replace("NARSAPUR","HYDERABAD"));

//Boolean datatype
let x=10;
let y= 20;
let z=x>y;
console.log(z);

//null datatype
let price=null;
console.log(price);

//user defined data type
let fees;
fees= 1000;
console.log(fees);

//BigInt data Type
let number = BigInt(123456789);
console.log(number);

//math methods in js
console.log(Math.ceil(4.3));
console.log(Math.floor(4.8));
console.log(Math.abs(4.8));
console.log(Math.random());
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.max(9,8,5,2,3,1,4,5,6,7));
console.log(Math.sqrt(225));
console.log(Math.pow(2,5));
console.log(parseInt(25.6));
console.log(parseFloat(25.36256));

//arithmatic operators
let p=20;
p+=15;
p-=5;
p/=7;
p%=7;
console.log(p);

//aggignment  operrators
let q =10;
q==10;
console.log(q=="100");

//comparisson operators
let r=100;
console.log(r>75);
console.log(r<100);
console.log(r>=100);
console.log(r<=100);
console.log(r!=100);

//loops in js
//for loop
for(i=0;i<=10;i++){
    console.log(i);
}

//while loop:it is implemented when no.of interactions are not known
let j = 1;
while (j <= 50) {
    console.log(j);
    j *= 2; // j doubles each time
}


let k=1;
do{
    console.log(k);
    k*=2;
} while(k<=10);

let fruits=["apple", "banana", "kiwi", "orange"];
for(let items of fruits){
    console.log(items);
}

let object={
    college:"BVRIT",
    location:"NARSAPUR",
    branch:"AI & ML, CSE"
};
for (let items in object){
    console.log(object[items]);
}

//conditional statements

// to perform different actions based on different conditions
// 1 if conditions
// 2 if else
// 3 if else if

// initialization;
// if(condition){
//     //code to be executed
// }

let age=18;
if(age>=18){
    console.log("you are eligible to vote");
} else{
    console.log("you are minor");
}

let age1=13;
if (age1<13){
    console.log("you are not eligible to vote");
}else if(age1>13 && age1<18){
    console.log("you are a minor");
}else if(age1>18 && age1<=100){
    console.log("you are a major");
}else{
    console.log("apply to vote when your age is 18");
}

//Switch Case
let day=parseInt(prompt("Enter your day"));
//let day = Number(prompt("Enter your day (1-7):")); // Convert input to a number
if (isNaN(day)) {
    console.log("Invalid input! Please enter a number.");
} else {
    switch(day){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid");
    }
}


//objects in JS
let person={
    firstName:"sai",
    lastName:"mohan",
    age:"23",
    designation:"Technical Trainer"
}
console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);

let college=new Object();
console.log(college);

college.collegename="BVRIT"
college.branch="AIML"
college.year="3rd year"
college.studentstrength=130
console.log(college);

person.email="krishnach2204@gmail.com"
person.empid="MT-19"
console.log(person);

delete college.constructor.collegename;
console.log(college);

//non primitive data types
//arrays
let FRUITS=["MANGO", "BANANA", "KIWI", "ORANGE"];
FRUITS.push("kiwi");
console.log(FRUITS);

FRUITS.pop();
console.log(FRUITS);

FRUITS.shift();
console.log(FRUITS);

FRUITS.unshift("GRAPES");
console.log(FRUITS);

//  Functions

function add(a,b){
    console.log(a+b);
}

let f=function(a,b){
    console.log(a+b);
}
add(1,2);
f(1,2);

let fname=(a,b)=>console.log(a+b);


let l = document.getElementsByClassName("heading");
console.log(l);