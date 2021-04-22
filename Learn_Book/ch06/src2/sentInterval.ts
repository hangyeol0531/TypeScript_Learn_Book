//! 세미코루틴 단일 스레드 동작을 마치 다중 스레드 동작처럼 보이게함

const period = 1000
let count = 0
console.log('program started...')
const id = setInterval(() =>{
    if(count >= 3){
        clearInterval(id)
        console.log('program finished')
    }else console.log(++count)
}, period)