//sum array
let num = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < num[i]; i++) {
    sum = sum + num[i];
}
console.log(sum);
//filter even numbers
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
//find largest
let lar = 0;
let numm = [1, 2, 3, 4, 5];
for (let i = 0; i < numm[i]; i++) {
    if (lar < num[i]) {
        lar = num[i];
    }
}
console.log(lar);
//reverse string
let name = "imran";
let reversed = "";
for (let i = name.length - 1; i >= 0; i--) {
    reversed += name[i];
}
console.log(reversed)
//greeting function
function greet(name){
   return `hello, ${name}`;
}
greet("imran");
//count vowels
function countVowels(str) {
    let count = 0;
    for (let ch of str) {
        if ("aeiou".includes(ch.toLowerCase())) {
            count++;
        }
    }

    return count;
}
console.log(countVowels("imran"));

//fizzbuzz
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("fizzbuzz");
    }
    else if (i % 3 === 0) {
        console.log("fizz");
    }
    else if (i % 5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(i);
    }
}



