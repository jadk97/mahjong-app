import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Hand from "./components/Hand";
import TitleScreen from "./components/Navigation/TitleScreen";
function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path="/">
      <TitleScreen />
    </Route>
      <Route path="/room/:id">
        <Hand />
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
