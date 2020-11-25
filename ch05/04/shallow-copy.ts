import { or } from "ramda"

const originalArray = [5, 3, 9, 7]
const shallowCopiedArray = originalArray
shallowCopiedArray[0] = 0
console.log(originalArray, shallowCopiedArray)
//
const originalArray1 = [1, 2, 3, 4, 5]
const shallowCopiedArray1 = [...originalArray1]
shallowCopiedArray1[0] = 0
console.log(originalArray1, shallowCopiedArray1)