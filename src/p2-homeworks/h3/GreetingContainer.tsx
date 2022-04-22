import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string | null>('') // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setError('')
    setName(e.currentTarget.value)
  }
  const addUser = (name: string) => {
    if (name.trim()!==''){
    alert(`Hello ${name.trim()} !`);
    addUserCallback(name);
    setName('')// need to fix
      } else {
      setError('Invalid name')
    }
  }

  const totalUsers = users.length // need to fix
  // console.log(totalUsers)

  return (
      <Greeting
          name={name}
          setNameCallback={setNameCallback}
          addUser={() => addUser(name)}
          error={error}
          totalUsers={totalUsers}
      />
  )
}

export default GreetingContainer
