// ts language 서버가 돌아서 타입을 추론함


// 타입 추론 기본 1
var a = 'abcd';

function getA(a){

}

function getB(b = 10){
    var c = 'hi';
    return b + c;
} 

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello',
// }

// 타입 추론 기본 3

interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K
}

var deatiledItem: DetailDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a',
}

// 가장 적절한 타입(Best Common Type)
const arr = [0, 1, true, true, true, 'asd']