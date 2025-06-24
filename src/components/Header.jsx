// src/components/Header.jsx
const Header = () => {
  return (
    <header
      style={{
        backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
      }}
    >
      <h1>Pizzería Mamma Mía 🍕</h1>
      <p>¡Las mejores pizzas artesanales directo a tu mesa!</p>
    </header>
  )
}

export default Header
