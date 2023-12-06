import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import About from "./components/About"


function App() {


  return (
    <div className='h-screen p-10'>
    {/* <div className=' bg-red-500 h-full'> */}
      <div className="grid grid-cols-4 grid-rows-11 gap-4 [&>*]:rounded-lg [&>*]:bg-fuchsia-600 h-full">
        <div className="col-span-2 row-span-3">01</div>
        <div className="col-span-1 row-span-3">02</div>
        {/* <About /> */}
        <div className="col-span-1 row-[span_10_/_span_10] overflow-scroll"><About /></div>
        <div className="col-span-3 row-span-5 row-start-4">04</div>
        <div className="col-span-1 row-span-3 row-start-10">05</div>
        <div className="col-span-1 row-span-3 row-start-10">06</div>
        <div className="col-span-1 row-span-3 row-start-10">07</div>
        <div className="col-span-1 row-span-1 row-start-12">08</div>
        
      </div>
    {/* </div> */}
    </div>

  )
}

export default App
