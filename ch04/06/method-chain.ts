import { multiply, values } from "ramda"

export class calculator{
    constructor(public value : number = 0){}
    add(value : number){
        this.value += value
        return this
    }

    multiply(value : number){
        this.value *= value
        return this //메서드 체인을 구현하려면 메서드가 항상 this를 반환
    }
}

