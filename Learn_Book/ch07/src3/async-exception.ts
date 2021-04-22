//! 에러 처리를 위해 예외 발생을 catch로 해줘야함

const asyncException = async() =>{
    throw new Error('error')
}

asyncException().catch(err => console.log('error : ', err.message)) // error : error