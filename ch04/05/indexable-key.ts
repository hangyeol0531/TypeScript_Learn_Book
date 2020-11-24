export type KeyValueType = {
    [key : string] : string
}

export const makeObject = (key:string, value : string):KeyValueType => ({[key] : value})

console.log(makeObject('name', 'jack'))
console.log(makeObject('firstname', 'nick'))