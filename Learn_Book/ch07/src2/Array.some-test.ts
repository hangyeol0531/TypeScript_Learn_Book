//하나라도 만족하면 true

const isAnyTrue = (values: boolean[]) => values.some((value => value == true)) //Array는 하나라도 조건만족하는 true

console.log(
    isAnyTrue([false, true, false]),
    isAnyTrue([false, false, false])
)
//!  하나라도 해소되면 reslove 먼저 에러나면 rejects
Promise.race([Promise.resolve(true), Promise.resolve('hello')])
.then(value => console.log(value))

Promise.race([Promise.resolve(true), Promise.reject(new Error('hello'))])
.then(value => console.log(value))
.catch(error => console.log(error.message))

Promise.race([Promise.reject(new Error('error')), Promise.reject(true)])
.then(value => console.log(value))
.catch(error => console.log(error.message))