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

