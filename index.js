
//type conversion
let myVar;
myVar = String(34);
console.log(myVar,(typeof myVar));

let booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));

let date = String(new Date());
console.log(date,(typeof date));

let arr = String([1,2,3,4,5]);
console.log(arr.length,(typeof arr));

let i = 7;
console.log(i.toString());

let stri = "3434";
console.log(stri, (typeof stri));

let number = parseFloat('34.098');
console.log(number.toFixed(30), (typeof number)
);

//type coercion
let mystr = Number("650");
let mynum = 34;

console.log(mystr + mynum);



