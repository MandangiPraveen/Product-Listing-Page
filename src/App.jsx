
import NavBar from './PageItems/NavBar'
import Home from './PageItems/Home'
import ProductDetails from './PageItems/ProductDetails'
import PageNotFound from './PageItems/PageNotFound'
//import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Cart from './PageItems/Cart'
import Profile from './PageItems/Profile'
import PaginationProvider from './PageItems/utility/PaginationContext'


function App() {

  return (
    <PaginationProvider>
      
      <Router>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </Router>
    </PaginationProvider>
  )
}

export default App
