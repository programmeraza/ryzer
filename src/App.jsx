import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Error from './pages/Error'
import Store from './pages/Store'
import PC from './pages/PC'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<Error/>} />
      <Route path='/latest' element={<Store/>} />
      <Route path='/pc' element={<PC/>} />
    </Routes>
  )
}

export default App
