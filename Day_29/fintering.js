let arr = [12,324,232,3,3421,42,342,3213,434,234,232,234,532,233,232];
// morethan 500
let filtered = arr.filter(value => value >= 500);
console.log('Value are less than 500 :',filtered);

// less than 500
let filteredLessThan = arr.filter(value => value <= 500);
console.log('Value are More than 500 :',filteredLessThan);