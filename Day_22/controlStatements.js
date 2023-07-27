let marks = 50;
console.log('Your Marks id',marks);

// if-else Statements
if(marks >= 90){
    console.log('Grade is A');
}
else if(marks > 90 || marks >= 80){
    console.log('Grade is B');
}
else if(marks > 80 || marks >= 60){
    console.log('Grade is C');
}
else{
    console.log('D');
}

// Switch Statement
let word = 2;
switch(word){
    case 1 : console.log('Apple');
    break;
    case 2 : console.log('Ball');
    break;
    case 3 : console.log('Cat');
    break;
    default : console.log('Dog');
}