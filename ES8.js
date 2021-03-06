//ES8  Features

//1. Object.values()  //return an array having object values.exactly opposite of Object.keys().
//2. Object.entries() //return an array having object key-value pairs.
//3. String padding (padStart() and padEnd())
//4. Object.getOwnPropertyDescriptors()
//5. Trailing commas in function parameter lists and calls
//6. Async functions (async and await)

//-----------------------Object.entries()
var fruits = {
  apple: 10,
  orange: 20,
};

for (var [key, val] of Object.entries(fruits)) {
  console.log(key, val);
}
//Output:apple 10 orange 20

//Object.keys() returns array of keys
console.log( Object.keys(fruits)) 
//o/p  [ 'apple', 'orange' ]

//-----------------------object.values
var fruits = {
  apple: 10,
  orange: 20,
}
Object.values(fruits)
//O/P [10, 20]

//-----------------------string padding
"string".padStart(targetLength, padString);
"string".padEnd(targetLength, padString);

//start
"cat".padStart(5); // ' cat' [Empty space added in the beginning]
"cat".padStart(5, "a"); // 'aacat'
"cat".padStart(1, "a"); // 'cat' [Nothing happen]
"cat".padStart(5, "abc"); // 'abcat'
"cat".padStart(8, "abc"); // 'abcabcat' [padString start repeating]

//end
"cat".padEnd(5); // 'cat ' [Empty space added in the end]
"cat".padEnd(5, "a"); // 'cataa'
"cat".padEnd(1, "a"); // 'cat'
"cat".padEnd(5, "abc"); // 'catab'
"cat".padEnd(8, "abc"); // 'catabcab'


//Output: 02/17/2020 (today date in mm/dd/yyyy format)

//-----------------------trailing comma
var list = [
  "one",
  "two",// It is valid
];

var obj = {
  one: "1",
  two: "2",//  It is valid
};

function add(
  one,
  two, // It is valid
) {}


//----------------------------------------getownproperty
var counterArray = {
  A : 3,
  B : 4
};
counterArray["C"] = 1;
Object.getOwnPropertyNames(counterArray).length; // Output 3
