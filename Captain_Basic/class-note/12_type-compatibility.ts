interface Developer3{
    name: string;
    skill: string;
}

// interface Person3{
//     name: string;
// }

class Person3{
    name: string;
}

let developer: Developer3 = {name: 'name', skill : 'js'};
let person : Person3; 


person = developer; // developer = person; // 오른 쪽이 더 많은 속성을 가지거나 커야한다.

console.log(person);

// 함수
var add = function add(a: number){
    // ...
    console.log(a);
}

var sum = function(a: number, b: number){
    // ...
}

sum = add; // sum은 인자를 1개를 받을 수 있어서 가능함.
sum(1);
// add = sum;


// 제네릭
interface Empty<T>{
    // ..
}
var empty1: Empty<string>
var empty2: Empty<number>
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
    data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;