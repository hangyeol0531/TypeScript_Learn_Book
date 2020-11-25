import {ResultType} from './ResultType'

export const doSomething = () : ResultType =>{
    try{
        throw new Error('some error occurs')
    }catch(e){
        return[false, e.message] //! 튜플로 구체적 내용 반환
    }
}