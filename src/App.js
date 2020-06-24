import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import './common.css';
class App extends Component {
  render() {
    return (
      <div className="banner-image">
      <div class="inner-banner-image">	
         <Router>
        <Header />
         <Switch>
          <Route path="/portfolio" exact component={Home} />
          <Route path="/portfolio/about" component={About} />
          <Route path="/portfolio/contact" component={Contact} />
        </Switch>
      </Router>
     </div>
     </div>
  );
  }
}
export default App;