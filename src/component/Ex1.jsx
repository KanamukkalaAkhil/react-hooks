import React,{useState} from 'react'

// react hooks => use only in functional components
//1.useState
//2.useEffect
//3.useContext

function Ex1() {
  //const [state,handler] = useState(initial value) // declare react states in functional component
  const [ x, setX]=useState(9)
  const [title,setTitle]=useState('welcome to react state')
  const [isView , setIsView]=useState(true)
  const [colors,setColors]=useState(['red','blue'])
  const [user,setUser]=useState({
    name:'sunil',
    email:'sunil@gmail.com'
  })

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">useState</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-warning">x = {x}</h3>
          <h3 className="text-warning">title = {title}</h3>
          <h3 className="text-warning">isView = {isView}</h3>
          <h3 className="text-warning">colors = {colors}</h3>
          <h3 className="text-warning">user details = {user.name +" & "+user.email}</h3>
        </div>
      </div>
    </div>
  )
}

export default Ex1