import { useState } from 'react'
import Navbar from './components/partials/NavBar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className='bg-neutral-800 light:bg-gray-200'>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Certificates/>
      <Footer/>
    </div>
  )
}

export default App
