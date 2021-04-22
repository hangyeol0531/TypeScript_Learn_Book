import { rejects } from 'assert'
import {readFileSync, readFile, read} from 'fs'
import { resolve } from 'path'

// 동기 방식으로 읽기

console.log('read package.json using synchronous api...')
const buffer : Buffer = readFileSync('./package.json')
console.log(buffer.toString())

//package.json 파일을 비동기 방식으로 읽는 예

readFile('./package.json', (error : Error, buffer : Buffer) =>{
    console.log('read pack.json using asynchronous api...')
    console.log(buffer.toString())
})

// Promise와 async/await 구문을 사용
const readFilePromise = (filename : string) : Promise<string> =>
    new Promise<string>((resolve, rejects) => {
        readFile(filename, (error : Error, buffer : Buffer) => {
        if(error) 
            rejects(error)
        else 
            resolve(buffer.toString())
    })
});

(async () =>{
    const content = await readFilePromise('./package.json')
    console.log('read package.sjon using Promise and async/await')
    console.log(content)
})()