import Person from "../ch02/ch02-02/person/Person";

interface IPerson4{
    name : string
    age? : number   
}

class Person4 implements IPerson4 {
    constructor(public name : string, public age? :number){ 
    }
}

let jack4 : IPerson4 = new Person('jack', 32)
console.log(jack4)