Promise.resolve(1).then(value => console.log(value)) // 1

Promise.resolve('hello').then(value => console.log(value)) // heelo

Promise.resolve([1, 2, 3]).then(value => console.log(value))

Promise.resolve({name : 'jack', age: 32}).then(value => console.log(value))

Promise.reject(new Error('에러 발생')).catch((err : Error) => console.log('error : ', err.message))