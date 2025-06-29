import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Register from './components/Register'
import { useState } from 'react'

function App() {
  const [mostrarRegistro, setMostrarRegistro] = useState(false) // Cambia a false para ver Home

  return (
    <>
      <Navbar />
      {mostrarRegistro ? <Register /> : <Home />}
      <Footer />
    </>
  )
}

export default App