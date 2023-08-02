//  getter -> access properties
//  setter -> change or mutate properties

let person = {
    fName: 'Aditya',
    lName: 'Mathur',
    get fullName(){
        // geting properties
        return `${person.fName} ${person.lName}`;  
    },
    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};
person.fullName = 'Kartik Kumar'
console.log(person.fullName);