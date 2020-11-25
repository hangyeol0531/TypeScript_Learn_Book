import {range} from './range'

let reduceSum : number = range(1, 100 + 1).
    reduce((result : number, value : number) => result + value, 0)
console.log(reduceSum)


let rdeuceSum1 : number = range(1, 10 + 1)
    .reduce((result : number, value : number) => result * value, 1)
console.log(rdeuceSum1)