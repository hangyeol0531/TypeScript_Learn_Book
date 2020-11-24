import {NumberToNumberFunc, add} from './add'

let fn : NumberToNumberFunc = add(1) //임시 변수
let result = fn(2)
console.log(result)
console.log(add(1)(2))

const multiply = a => b => c => a * b* c
console.log(multiply(1)(2)(3))