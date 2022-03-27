// interface Person{
//     name: string;
//     age: number;
// }


// type은 별칭 제공
// type은 확장이 되지 않는다. -> 가능한 type보단 interface로한다.
type Person = {
    name: string;
    age: number;
}

const seho1: Person = {
    name: "seho",
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string, title: string, done: boolean};