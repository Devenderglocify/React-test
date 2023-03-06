import React from 'react'
import Persons from './Persons'

function NameList() {
    // const names = ['ravi','raj','mohit','rohit']
    // const namlist = names.map(name => <h2>{name}</h2>)
    const person = [
        {
            id: 1,
            name: 'ravi',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'raj',
            age: 30,
            skill: 'php'
        },
        {
            id: 3,
            name: 'mohit',
            age: 30,
            skill: 'node'
        },
        {
            id: 4,
            name: 'rohit',
            age: 30,
            skill: 'java'
        }
    ]
    const personList =person.map((per, index) =>  <Persons key={index} persons={per}/>
        )
  return (
    <div>
       {/* {namlist} */}
       {personList}
    </div>
  )
}

export default NameList