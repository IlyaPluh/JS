function filterrange(arr, min, max) {
  return arr.filter(el => el > min && el < max);
}
console.log(filterrange([5, 3, 8, 1], 1, 8))