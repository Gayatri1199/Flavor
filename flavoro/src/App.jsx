import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      
        <Route path="/" element={<HomePage/>}/>
         {/* <Route path="/cart" element={<Cart/>}/> */}
        <Route path="/success" element={<SuccessPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App