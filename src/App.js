import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Menu from './component/Menu'
import Ex1 from './component/Ex1'
import Ex2 from './component/Ex2'
import Ex3 from './component/Ex3'
import Ex4 from './component/Ex4'
import Ex5 from './component/Ex5'
import Ex6 from './component/Ex6'
import Ex7 from './component/Ex7'
import Ex8 from './component/Ex8'

function App() {
  return (
    <BrowserRouter>
       <Menu/>c
       <Routes>
          <Route path={`/`} element={<Ex1/>}></Route>
          <Route path={`/ex1`} element={<Ex1/>}></Route>
          <Route path={`/ex2`} element={<Ex2 itemsPerPage={10} />}></Route>
          <Route path={`/ex3`} element={<Ex3 itemsPerPage={5} />}></Route>
          <Route path={`/ex4`} element={<Ex4/>}></Route>
          <Route path={`/ex5`} element={<Ex5/>}></Route>
          <Route path={`/ex6`} element={<Ex6/>}></Route>
          <Route path={`/ex7`} element={<Ex7/>}></Route>
          <Route path={`/ex8`} element={<Ex8/>}></Route>
          <Route path={`/*`} element={<Ex1/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App