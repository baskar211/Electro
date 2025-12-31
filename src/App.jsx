import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/layout";
import Home from "./pages/Home/page";
import About from './pages/About/about'
import Contact from './pages/Contact/contact'
import Cartpage from './components/Cart/cart'
import Loginpage from './components/Auth/login'
import Signup from './components/Auth/registar'
import Error from './components/Nopage/nopage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cartpage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="registar" element={<Signup />} />
        <Route path="password-reset" />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
