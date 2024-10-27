import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Dark from './Components/Navbar/Dark'
import Nav from './Components/Navbar/Nav'
import Home from './Components/Content-Main/Home'
import About from './Components/Content-Main/About'
import Portfolio from './Components/Content-Main/Portfolio'
import Contact from './Components/Content-Main/Contact'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>
      <Dark />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
         <Route path='/portfolio' element={<Portfolio/>}/>
         <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Nav />
      </Router>



     



    </>
  )
}

export default App



