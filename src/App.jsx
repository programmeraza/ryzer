import React from 'react'
import HomePages from './pages/HomePages'
import { Route, Routes } from 'react-router-dom'
import Error from './pages/ErrorPages'
import Store from './pages/Store'
import PC from './pages/PC'
import MobilePages from './pages/MobilePages'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePages/>} />
      <Route path='*' element={<Error/>} />
      <Route path='/store' element={<Store/>} />
      <Route path='/pc' element={<PC/>} />
      <Route path='/mobile' element={<MobilePages/>} />
    </Routes>
  )
}

export default App
