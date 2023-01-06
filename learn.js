function unique(arr) {
  let set = new Set(arr)
  return set
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//console.log(unique(values))

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//console.log(aclean(arr));

let map = new Map();
map.set("name", "John")
map.set("surname", "Pluh");
let keys = Array.from(map.keys());
keys.push("more");

//console.log(keys);

// const player = Object.create(
//   {},
//   {  
//     level: {
//       value: 1,
//       writable: true,
//     },  
//     nextLevel: {
//       // количество опыта для следующего уровня на основе существующего
//       get() {
//         return Math.round((this.level*10)*(this.level*10));
//       },
//   },
// });

// console.log(player.level)

class Player {
  constructor(level){
      this.level = level;
      this.nextLevel = Math.round((this.level*10)*(this.level*10));
  }
}
let lev = 4
const player = new Player(lev)
//console.log(player.nextLevel)


let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2022, 12, 12));

//console.log("Read message 0: " + readMessages.has(messages[0]));


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salary) {
  return Object.values(salaries).reduce((a, b) => a + b, 0)
  // let sum = 0
  // for (let value of Object.values(salaries)) {
  //   sum += value;
  // }
  // return sum
}

//console.log(sumSalaries(salaries));


let user = {
  name: 'John',
  age: 30
};

function count(obj) {
  return Object.keys(obj).length;
}

//console.log(count(user))


let user2 = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user2;

//console.log(age)


let salaries2 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salary) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}

//console.log(topSalary(salaries2))

let date = new Date(2022, 11, 28);
date.setDate(date.getDate() + 5);
//console.log(date);

//console.log(new Date().getTimezoneOffset());

let start = Date.now();
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = Date.now();
//console.log( `Цикл отработал за ${end - start} миллисекунд` );


let head = {
  glasses: 1
};
let table = {
  pen: 3,
  __proto__: head
};
let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};
let pockets = {
  money: 2000,
  __proto__: bed
};

//console.log(head.pillow)


Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};
function f() {
  console.log("Hi");
}
f.defer(1000);

Function.prototype.defer2 = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
    }
};
function f2(a, b) {
  console.log( a + b );
}
f2.defer2(1000)(1, 2);

let obj = Object.create(null);
let key = ("What's the key?", "__proto__");
obj[key] = "some value";
console.log(obj[key]);
