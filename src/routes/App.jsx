import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import AppRoutes from './AppRoutes';

const App = ()=>{
  
    return(
      <Router>
        <Switch>
          {AppRoutes.map(route=><Route key={route.key} exact path={route.path}><route.component/></Route>)}
        </Switch>
      </Router>
    )
}

export default App;