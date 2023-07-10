import React from 'react'

function AgeInfo(props) {
  return (
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-warning"> { props.ageInfo() } </h3>
        </div>
    </div>
  )
}

export default AgeInfo
