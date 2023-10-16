import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {


  return (
    <>
      <Header />
      {/* <h1 className='bg-red-500'>Aditya</h1> */}
        <Outlet />
      <Footer />
    </>
  )
}

export default App
