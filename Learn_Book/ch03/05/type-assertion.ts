import INameable from './INameable'
let obj : object = {name : 'Jack'}
//! 타입 단언
let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
console.log(typeof(name1), name2)