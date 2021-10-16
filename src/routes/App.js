import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Products from '../components/containers/products.jsx';
import Buy from '../components/containers/buy.jsx'
import Authorization from '../components/containers/authorization.jsx'

const App = ()=>{
  
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Products}/>
          <Route exact path="/buy" component={Buy}/>
          <Route exact path="/auth" component={Authorization}/>
        </Switch>
      </Router>
    )
}

export default App;