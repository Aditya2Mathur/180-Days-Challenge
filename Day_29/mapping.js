let num = [3,2,5,1,4,9,6,8,7];

let mapped = num.map(function(value){
    return 'Subject_Id : ' + value;
})
console.log(mapped);

//  mapping in object

let number = [1,3,5,7 , -3,-2,-6];

let items = number
            .filter(value => value >= 0)
            .map(num => {value: num});

console.log(items);