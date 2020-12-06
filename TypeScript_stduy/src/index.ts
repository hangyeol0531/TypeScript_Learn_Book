// interface Human{
//     name : string;
//     age : number;
//     gender : string;
// }

class Human {
    public name : string;
       age : number;
    public gender : string;
    constructor(name : string, age : number, gender? : string){//생성자
        this.name = name;
        this.age = age;
        this.gender = gender;
    } 
}

const lynn = new Human("han", 20, "male");
 
// const person = {
//     name : "han",
//     age : 20,
//     gender : "male"
// }

const sayHi = (person : Human): string =>{ // ?를 붙이면 선택적인 것
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender} !!!   `;
};

console.log(sayHi(lynn));

export {};  