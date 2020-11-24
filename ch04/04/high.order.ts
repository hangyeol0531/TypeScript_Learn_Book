const add1 = (a:number) : (number) => number => (b:number) : number => a + b
const result1 = add1(1)(2)
console.log(result1)