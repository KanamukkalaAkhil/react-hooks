import React, { useState, useCallback } from 'react'
import AgeInfo from './sub/AgeInfo'
import Age from './sub/Age'

//useCallback => will return memorised value of callback
// useMemo => will return memorised function of callback

function Ex4() {
  const [age,setAge] = useState(10)

  const incrementAge = () => {
    setAge(age+1)
  }

  const userAge = `Bheem age is ${age} years`

  // useCallback will return a memorized version of the callback that only changes if one of the inputs has changed.

  const updateAge =  useCallback(() => {
    return userAge
  },[age])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">useCallback</h3>
        </div>
      </div>
      <Age age={age} ageHandler = {incrementAge} />
      <AgeInfo ageInfo={updateAge} />
    </div>
  )
}

export default Ex4