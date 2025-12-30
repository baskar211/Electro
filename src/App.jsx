import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/page";
import Layout from "./pages/layout";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/nopage";
import Cartpage from "./components/Cart/cart";
import Loginpage from "./pages/login";
import Signup from "./pages/registar";

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
