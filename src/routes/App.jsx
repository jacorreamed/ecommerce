import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Products from 'pages/products.jsx';
import Buy from 'pages/buy.jsx'
import Authorization from 'pages/authorization.jsx'
import Detail from 'pages/detail'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = ()=>{
    return(
      <Router>
        <Switch>
          <Route exact path="/"><Products/></Route>
          <Route exact path="/detail/:idItem">< Detail/></Route>
          <Route exact path="/buy"><Buy/></Route>
          <Route exact path="/auth"><Authorization/></Route>
          <Route exact path="/password-recovery"><Products/></Route>
          <Route exact path="/profile"><Products/></Route>
          <Route exact path="/orders"><Products/></Route>
          <Route exact path="*">{()=><h1>not found</h1>}</Route>
        </Switch>
      </Router>
    )
}

export default App;