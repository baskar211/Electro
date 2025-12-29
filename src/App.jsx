import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/page";
import Layout from "./pages/layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}
