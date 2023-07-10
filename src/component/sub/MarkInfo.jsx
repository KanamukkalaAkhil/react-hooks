import React, { memo} from 'react'

const MarkInfo = memo((props) => {
    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-info"> { props.info.result } </h3></div>       
        </div>
    )
});

export default MarkInfo
