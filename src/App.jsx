// src/App.jsx
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'


function App() {
  const [vistaActual, setVistaActual] = useState('home') // 'home', 'register' o 'login'

  return (
    <>
      <Navbar setVistaActual={setVistaActual} />
      
      {vistaActual === 'home' && <Home />}
      {vistaActual === 'register' && <Register />}
      {vistaActual === 'login' && <Login />}
      {vistaActual === 'cart' && <Cart />}

      <Footer />
    </>
  )
}

export default App
