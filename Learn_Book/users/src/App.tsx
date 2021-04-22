import React from 'react'
import {IUser} from './IUser'
import {getDataPromise} from './getDataPromise'

const App : React.FC = () =>{
  // const user = {name : 'Jack', age : 32}
  // return (
  //   <div className='App'>{ // JSX
  //     JSON.stringify(user)
  //   }</div>
  // )
  getDataPromise((users: IUser[]) => console.log('users', users))(0,1)
  return(
    <div className='App'>please open console window! </div>
  )
}

export default App;
