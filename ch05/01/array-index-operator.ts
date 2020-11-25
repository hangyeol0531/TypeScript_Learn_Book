const numbers : number[] = [1, 2, 3, 4, 5]
for(let index = 0; index < numbers.length; index++){
    const item : number = numbers[index]
    console.log(item)
}

let array : number[] = [1, 2, 3, 4, 5]
let [first, second, third, ...rest] = array
console.log(first, second, third, rest)