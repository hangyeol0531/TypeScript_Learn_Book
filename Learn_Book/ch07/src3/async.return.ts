const asyncReturn = async() =>{
    return [1, 2, 3] //! async return 은 프로미스 형식으로 가서 then으로 받아서 처리해아함
}

asyncReturn()
.then(value => console.log(value)) // [1,2,3]