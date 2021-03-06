import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
  data: Array<AffairType>
  setFilter: (filterValue: FilterType) => void
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {

  const mappedAffairs = props.data.map((a: AffairType) => (
      <Affair // should work
          key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
          affair={a}
          deleteAffairCallback={props.deleteAffairCallback}
      />
  ))

  const setAll = (filterValue: FilterType) => {
    props.setFilter(filterValue)
  } // need to fix
  const setHigh = (filterValue: FilterType) => {
    props.setFilter(filterValue)
  }
  const setMiddle = (filterValue: FilterType) => {
    props.setFilter(filterValue)
  }
  const setLow = (filterValue: FilterType) => {
    props.setFilter(filterValue)
  }

  return (
      <div className={s.someClass}>

        {mappedAffairs}

        <button onClick={() => setAll('all')}>All</button>
        <button onClick={() => setHigh('high')}>High</button>
        <button onClick={() => setMiddle('middle')}>Middle</button>
        <button onClick={() => setLow('low')}>Low</button>
      </div>
  )
}

export default Affairs
