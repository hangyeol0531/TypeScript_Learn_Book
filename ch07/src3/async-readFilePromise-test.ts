import {readFilePromise} from '../src2/readFilePromise'

const readFilesAll = async (filenames : string[]) =>{
    return await Promise.all(
        filenames.map(filenames => readFilePromise(filenames))
    )
}

readFilesAll(['../package.json', '../tsconfig.json'])
.then(([packageJson, tsconfigJson]: string[]) =>{
    console.log('<package.json> :', packageJson)
    console.log('<tsconfig.json> : ', tsconfigJson)
})
.catch(err => console.log('error : ', err.message))