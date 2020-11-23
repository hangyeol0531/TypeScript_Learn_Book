abstract class AbstractPerson5{
    abstract name : string
    constructor(public age? : number){}
}

class Person5 extends AbstractPerson5{
    constructor(public name : string, age? : number){
        super(age) //부모 생성자 호출
    }
}

let jack5 : Person5 = new Person5('jack', 32)
console.log(jack5)