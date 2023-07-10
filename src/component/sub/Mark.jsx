import React from 'react'

function Mark(props) {
  return (
   <div className="row">
    <div className="col-md-12">
        <h3 className="text-primary display-3"> marks = {props.mark } </h3>
        <button onClick={props.handler} className='btn btn-danger'>Inc Marks</button>
    </div>
   </div>
  )
}

export default Mark
