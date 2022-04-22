import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string | null
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : '';  // need to fix with (?:)

  return (
      <div className={s.greetingBox}>
        <h3 className={s.someClass}>Total users: {totalUsers}</h3>
        <input value={name}
               onChange={setNameCallback}
               className={inputClass}/>
        <button className={s.addButton}
                onClick={addUser}>
          Add
        </button>

        {error && <div className={s.errorText}>{error}</div>}

      </div>
  )
}

export default Greeting
