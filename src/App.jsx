import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Record from './components/Record'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>MOST WICKETS</h1>
     {/* <Record/> */}
     {/* <Record/> */}
     {/* <Add/> */}
     <View/>
     <Routes>
      <Route path='/' element={<Record/>}></Route>
      <Route path='/add' element={<Add/>}></Route>

     </Routes>
    </>
  )
}

export default App
