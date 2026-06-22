import React from 'react'
import Login from './LoginPage/Login.jsx'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home.jsx'
import Already_account from './LoginPage/Already_account.jsx'

function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<Login />} />
        <Route path="/signup" element={<Already_account />} />
      </Routes>
     
      


    </div>
  )
}

export default App