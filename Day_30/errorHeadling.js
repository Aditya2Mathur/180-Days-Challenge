// error Headling Using try and catch use getset code  

let person = {
    fName: 'Aditya',
    lName: 'Mathur',
    get fullName(){
        // geting properties
        return `${person.fName} ${person.lName}`;  
    },
    set fullName(value){
        if (value !== String){
            console.log('Enter The String value not');
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};
try{
    person.fullName = 1;
       
}
catch (a){
    alert('enter string');
}
console.log(person.fullName);