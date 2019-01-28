import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

import Counter from "./components/Counter";
import GamesPage from "./components/game";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import CounterPage from "./components/Counter/CounterPage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <Route exact path='/counterpage' component={CounterPage} />
        <Route exact path='/counter' component={Counter} />
        <Route exact path='/game' component={GamesPage} />
      </div>
    );
  }
}

export default App;
