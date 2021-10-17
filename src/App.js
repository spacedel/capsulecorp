import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shop from './components/pages/Shop';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contact' component={Contact} />
          
          <Route path='/shop' component={Shop} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
