// object creation
let person={
    name:'Aditya',
    age:20
}
console.log(person);
// Factory Function : return a new object

function student(name,branch){
    return detail ={
        Name: name,
        Branch: branch,
        study(){
            console.log("Student of Computer Science & Engineering");
        }
    };
}
let student1 = student('Aditya', 'CSE');
let student2 = student('Lala ', 'CE');
let student3 = student('Prakash ', 'ME');
console.log(student1);
console.log(student2);
console.log(student3);