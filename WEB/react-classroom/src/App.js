import './App.css';
import Classroom from './Components/Classroom';
import About from './Components/pages/About';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Components/layout/Header';

function App() {
  return (
    
    <BrowserRouter>
    
      <Switch>
        <Route exact path="/">
          <Classroom nom="JS Dev" />
        </Route>
        <Route path="/about" component={About}/>
      </Switch>
    </BrowserRouter>
   
  )
}

export default App;
