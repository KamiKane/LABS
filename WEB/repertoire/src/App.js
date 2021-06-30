import './App.css';
import React from 'react'

import Repertoire from './Components/Repertoire'
import AddContact from './Components/AddContact';
import Navigation from './Components/Navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
  <div >
      <Navigation />
  
  <Router>

    <Switch>
      <Route exact path="/">
          <Repertoire/>
      </Route>
      <Route path="/ajoutContact">
        <AddContact/>
      </Route>
      
    </Switch>
</Router>
    </div>
  );
}


export default App;

