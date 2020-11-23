import IPerson from "../ch02/ch02-02/person/IPerson"

let o : object = {name : 'Jack', age : 32}
o = {first : 1, second : 2}

// 객체의 타입을 정할 수 있는 인터페이스

interface IPeson {
    name : string
    age : number
}
let good : IPerson = {name : 'Jack', age : 32}

// let bad1 : IPerson = {name : 'Jack'}
// let bad2 : IPerson = {age : 32}
// let bad3 : IPerson = {}
// let bad4 : IPerson = {name : 'Jack', age : 32, etc : true}

interface IPerson2{
    name : string //필수
    age : number //필수
    etc? : boolean //선택
}
let good1 : IPerson2 = {name : 'Jack', age : 32}
let good2 : IPerson2 = {name : 'Jack', age : 32, etc : true}

let ai :{ // 익명 인터페이스
    name : string
    age : number
    etc? : boolean
} = {name : 'jack', age : 32}

function printMe(me : {name : string, age:number, etc? : boolean}){
    console.log(
        me.etc ?
            `${me.name} ${me.age} ${me.etc}` :
            `${me.name} ${me.age}`
    )
}

printMe(ai)