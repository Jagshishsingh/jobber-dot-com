import React from 'react';
import './App.css';
import HomePageMain from './Components/HomePage/HomePageMain';
import IndividualPageMain from './Components/IndividualPage/IndividualPageMain';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">

        <Switch>
          <Route path="/" exact component={HomePageMain}></Route>
          <Route path="/individual" exact component={IndividualPageMain}></Route>
        </Switch>
      

    </div>
    </Router>
  );
}

export default App;
