import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {ProductContextProvider} from 'state/globalState'

import Products from 'pages/products.jsx';
import Buy from 'pages/buy.jsx'
import Authorization from 'pages/authorization.jsx'
import Detail from 'pages/detail'
import NotFound from 'pages/not_found'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = ()=>{
    return(
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/detail/:idItem" element={< Detail/>}/>
            <Route path="/buy/" element={<Buy/>}/>
            <Route path="/auth" element={<Authorization/>}/>
            <Route path="/password-recovery" element={<Products/>}/>
            <Route path="/profile" element={<Products/>}/>
            <Route path="/orders" element={<Products/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </ProductContextProvider>
    )
}

export default App;