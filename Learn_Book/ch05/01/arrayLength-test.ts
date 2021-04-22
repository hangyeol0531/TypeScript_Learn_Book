import {arrayLength, isEmpty} from './arrayLength'
let numArr : number[] = [1, 2, 3]
let strArr : string[] = ['Hello', 'World']

type IPerson = {name : string, age? : number}
let personArray : IPerson[] = [{name : 'Jack'}, {name : 'Jane', age : 32}]

console.log(
    arrayLength(numArr),
    arrayLength(strArr),
    arrayLength(personArray),
    isEmpty([]),
    isEmpty([1])
)