// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PizzaDetail from "./pages/PizzaDetail";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

import { CartProvider } from "./context/CartContext"; // <-- Importa el CartProvider
import { PizzaProvider } from "./Context/PizzaContext"; // 

function App() {
  return (
    <CartProvider>
      <PizzaProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/PizzaDetail/p001" element={<PizzaDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          {/* ruta por defecto para páginas no existentes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </PizzaProvider>
    </CartProvider>
  );
}

export default App;

