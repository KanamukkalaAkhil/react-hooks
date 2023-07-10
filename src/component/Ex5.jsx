import React, { useState, useMemo} from 'react'
import Mark from './sub/Mark'
import MarkInfo from './sub/MarkInfo'

function Ex5() {
    const [marks,setMarks] = useState(0)

    const incMarks = () => {
        setMarks(marks+1)
    }

    const updateMarks = useMemo(() =>( {
        result: `anil has scored ${marks} in Maths.`
    }),[marks])
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">useMemo()</h3>
            </div>
        </div>
        <Mark mark={marks} handler={incMarks} />
        <MarkInfo info={updateMarks} />
    </div>
  )
}

export default Ex5
