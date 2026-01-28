// area & perimeter
              const width = 10;
              const height = 5;
              const area = height * width;
              const perimeter = 2(height * width);
            console.log(area);
            console.log(perimeter);


//temperature converter
              const celsius = 30;
              const f = celsius * 1.8 + 32;
            console.log(celsius + "C is " + f + "F");


//tip calculator
              const bill = 100;
              const tipRate = 0.2;
              const tip = bill * tipRate;
              const total = bill + tip;
              const salary = `Total to pay: $${total}`;
          console.log(salary);

// even and odd code
const n = 7;
if (n % 2 == 0) {
    console.log("even");
}
else
console.log("odd");

//age gate
const age = 16;
if (age >= 18) {
    console.log("Access Grantd");
}
else if (age < 17 && age > 13) {
    console.log("Guardian Required");
}
else
    console.log("Access Denied");


//login check
const user = "admin";
const pass = 1234;
if (user === "admin" && pass === "wrong") {
    console.log("Welcome");
}
else
    console.log("try again");

// Grade calculator

const stud = "Imran" ;
const grade = 86;
if (grade > 90) {
    console.log("A+");
}
else if (grade >= 85 && grade <= 90) {
    console.log(stud + " scored A");
    }
else if (grade >= 80 && grade <= 85) {
    console.log(stud + " scored A-");
}
else if (grade >= 75 && grade <= 80) {
    console.log(stud + " scored B+");
}
else if (grade >= 70 && grade <= 75) {
    console.log(stud + " scored B");
}
else if (grade >= 65 && grade <= 70) {
    console.log(stud + " scored B-");
}
else if (grade >= 50 && grade <= 65) {
    console.log(stud + " scored C");
}
else if (grade >= 40 && grade <= 50) {
    console.log(stud + " scored D");
}
else if (grade < 40 ) {
    console.log(stud + " scored F");
}

//password stregth checker

let pss ="gkhg6ut67tg68"
if (pss(length) < 16) {
    console.log("Your password is too short");
}
else {
    console.log("Your password is strong");
}

let pss = "yourPasswordHere";

if (pss.length < 16) {
    console.log("Too short");
} 
else {
    console.log("Strong password");
}
