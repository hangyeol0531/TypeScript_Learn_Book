import {range} from './range'

const array : number[] = range(1, 10 + 1)

let odds : number[] = array.filter((value) => value % 2 != 0)
let evens : number[] = array.filter((value) => value % 2 == 0)
console.log(odds, evens)

const half = array.length /2
let belowHalf : number[] = array.filter((v, index) => index < half)
let overwHalf : number[] = array.filter((v, index) => index >= half)
console.log(belowHalf, overwHalf)