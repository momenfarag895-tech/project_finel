import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './bages/Home'
import Products from "../src/bages/prodact";
import Prodact_detuls from "./bages/Prodact_detuls";
import Cart from "../src/bages/Cart"
import Login from "./bages/Login"

import Footer from '../src/components/footer'
import Nave from '../src/components/Navbar'
const App = () => {
  return (
    <BrowserRouter>
      <Nave />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
        path="/Products" 
        element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
       
            <Route
          path="/product/:id"
          element={<Prodact_detuls />}
        />
        <Route path="/Login" element={<Login />}/>
        


      </Routes>




      <Footer />
    </BrowserRouter>
  )
}

export default App