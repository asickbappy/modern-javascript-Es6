class parent{
    constructor(){
        this.fatherName = "akbor";
    }
}
class child extends parent{
    constructor(name){
        super();
        
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new child("arnold"); 
const baby2 = new child("omik");

console.log(baby.getFullName());
console.log(baby2.getFullName());
