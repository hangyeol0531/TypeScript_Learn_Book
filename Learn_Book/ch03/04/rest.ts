//! 잔여 연산자
let address : any = { 
    counrty : 'korea',
    city : 'seoul',
    address : 'gang',
    address1 : 'hang1',
    address3 : 'jang2'
}

const {counrty, city, ...detail} = address
console.log(detail)