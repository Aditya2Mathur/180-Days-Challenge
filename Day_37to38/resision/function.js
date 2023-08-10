// object create
let student = {
    Name: 'Aditya Mathur',
    branch: 'CSE',
    Year: '2nd',
};

function studentFun(){
    console.log('kaam ho gaya');
}

// constructor function
function people(){
    this.Name = 'aditya';
    this.DOY = 2002;
    this.age = function(){
        console.log(2023- DOY);
    };
}
let conPeople = people();
console.log(conPeople);
