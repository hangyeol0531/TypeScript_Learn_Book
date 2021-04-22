let names = ['Jack', 'Jane', 'Steve']

for(let index in names){
    const name = names[index]
    console.log(`[${index}] : ${name}`)
} //배열은 인덱스 값 순회

let jack : Record<string, string | number> =  {name : 'jack', age : 32} // 객체는 속성을 대상으로 순회
// record<키, 벨류>
for(let property in jack){
    console.log(`${property} : ${jack[property]}`)
}

for(let name of ['jack', 'jane', 'steve'])
console.log(name)

