import React, { useReducer } from 'react'

//initial state value
const initialState = {
    num:0
}

//reducer
const numReducer = (state,action) => {
    // console.log('action =', action)
    switch(action) {
        case 'plus':
            return { num : state.num + 1 }
            break;
        case 'minus':
            if(state.num > 0) {
                return {num : state.num -1 }
            } else {
                return { num : 0 }
            } 
            break;
        default: console.log('sorry, invalid input')
    }

}


function Ex8() {
    //const [state,dispatcher] = useReducer(reducer,initialState)

    const [state,dispatcher] = useReducer(numReducer, initialState)

  return (
   <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="text-success display-3">useReducer</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <h3 className="display-3 text-center text-danger"> Num = { state.num } </h3>

                <hr />

                <button className="btn btn-success" onClick={() => dispatcher('plus')}>
                    <i className="bi bi-plus"></i>
                </button>
                <button className="btn btn-danger float-end"  onClick={() => dispatcher('minus')}>
                    <i className="bi bi-dash"></i>
                </button>
            </div>
        </div>
   </div>
  )
}

export default Ex8
