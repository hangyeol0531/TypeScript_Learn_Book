interface User {
    age: number;
    name: string; 
}

// 변수에 인터페이스 활ㅇㅎㅇ
const seho: User = {
    age: 33,
    name: '세호'   
}

// 함수에 인터페이스 활용
function getUser(user: User){
    console.log(user);
    return user;
}

const capt = {
    name: '캡틴',
    age: 100,
}

getUser(capt);

// 함수의 구조에 인터페이스를 활용
interface SumFunction{
    (a: number, b: number): number;
}

let sum: SumFunction;

sum = function(a : number, b: number): number{
    return a + b;
}

// 인덱싱
interface StringArray{
    [index: number]: string,
}

const arr: StringArray = ['a', 'b', 'c'];
// arr[0] // a

// 딕셔너리 패턴
interface StringRegexDictionary{
    [key: string]: RegExp
}

// key나 value만 가져올때 타입 추론이 가능하다.
var obj: StringRegexDictionary = {
    sth: /abc/,
    cssFile: /css/,
}

// 인터페이스 확장
interface Perosn{
    name: string;
    age: number;
}

interface Developer extends Perosn{
    language: string;
}

const capt1: Developer = {
    name: 'hangyeol',
    age : 10,
    language: 'js',
}