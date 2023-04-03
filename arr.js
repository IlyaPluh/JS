function camelize(str) {
    return str.split('-').map((el, index) => index == 0 ? el : el[0].toUpperCase() + el.slice(1)
    ).join('')
    }
  console.log(camelize("webkit-transition-hello"))
  
  let strok = "-webkit-transition-hello";
  let arra = strok.split('-');
  console.log(arra)
  
  function filterrange(arr, min, max) {
    return arr.filter(el => el > min && el < max);
  }
  console.log(filterrange([5, 3, 8, 1], 1, 8))
    
  function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) { 
        arr.splice(i, 1);
        i--;
      }
    }
    return arr 
  }
  console.log(filterRangeInPlace([5, 3, 8, 1], 3, 7))
  
  function sortArr(arr) {
    arr.sort((a, b) => b - a);
    return arr
  }
  console.log(sortArr([11, -4, 7, -34, 111, 5])); 
  
  function sortArr2(arr) {
    let sortedArr = arr.slice().sort()
    return sortedArr
  }
  console.log(sortArr2(['Banan', 'Apple', 'Juce', 'Coconat']))
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };
  
  let users = [ vasya, petya, masha ];
  
  let names = users.map(el => el.name);
  // let names = []
  // users.forEach(el => names.push(el.name))
  
  function sortByAge(arr) {
    return arr.sort((a, b) => a.age > b.age ? 1 : -1);
  }

  console.log(sortByAge(users))
  console.log(names)
  
  let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
  let petya = { name: "Петя", surname: "Иванов", id: 2 };
  let masha = { name: "Маша", surname: "Петрова", id: 3 };
  
  let users = [ vasya, petya, masha ];
  
  let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));
 
  console.log(usersMapped[1].fullName)

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
let arr = [2, 3, 1]  
shuffle(arr)
console.log(arr) 

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

console.log(getAverageAge(arr))

