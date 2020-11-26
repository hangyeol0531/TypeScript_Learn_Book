import {createRangeIterable} from './createRangelterable'
const iterator = createRangeIterable(1, 3 + 1) // 반복기 동작 x

while(true){
    const {value, done} = iterator.next()
    if(done) break
    console.log(value)
}