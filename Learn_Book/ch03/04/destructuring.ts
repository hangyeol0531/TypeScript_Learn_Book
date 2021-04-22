// 비구조화

import {IPerson} from './IPerson_Icompany'

let jack : IPerson = {name : 'Jack', age : 32}
let {age, name} = jack
console.log(name, age)