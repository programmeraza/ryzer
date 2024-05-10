import React from 'react'
import HomePages from './pages/HomePages'
import { Route, Routes } from 'react-router-dom'
import Error from './pages/ErrorPages'
import Store from './pages/Store'
import PC from './pages/PC'
import MobilePages from './pages/MobilePages'
import ServicesPages from './pages/ServicesPages'
import LoginPages from './pages/LoginPages'
import SignupPages from './pages/SignupPages'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePages/>} />
      <Route path='*' element={<Error/>} />
      <Route path='/store' element={<Store/>} />
      <Route path='/pc' element={<PC/>} />
      <Route path='/mobile' element={<MobilePages/>} />
      <Route path='/services' element={<ServicesPages/>} />
      <Route path='/login' element={<LoginPages/>} />
      <Route path='/signup' element={<SignupPages/>} />
    </Routes>
  )
}

export default App
