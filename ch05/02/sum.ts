//! 구조형
let sum = 0
for(let val = 1; val <= 100;) sum += val++
console.log(sum)

//! 선언형
import {range} from './range' //데이터 생성과 가공 과정을 분리
let numbers : number[] = range(1, 100 + 1)
console.log(numbers)