import IPerson from './person/Person'
import Person, {makePerson} from './person/Person'

export const testMakePerson = (): void =>{
    let jane : IPerson = makePerson('Jane')
    let jack : IPerson = makePerson('jack')
    console.log(jane, jack)
}

testMakePerson()