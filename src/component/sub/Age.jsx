import React from 'react'

function Age(props) {
  return (
    <div className="row">
        <div className="col-md-12">
            <h3 className="display-3 text-danger">Age = {props.age}</h3>
            <button onClick={props.ageHandler} className='btn btn-primary'>Inc Age</button>
        </div>
    </div>
  )
}

export default Age
