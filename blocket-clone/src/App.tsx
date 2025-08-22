import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ListingDetails from './pages/ListingDetails';
import AdminView from './pages/AdminView';
import Login from './pages/Login';
import AnimatedTransition from './components/Animations/AnimatedTransition';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedTransition>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/listing/:id" component={ListingDetails} />
          <Route path="/admin" component={AdminView} />
          <Route path="/login" component={Login} />
        </Switch>
      </AnimatedTransition>
    </Router>
  );
};

export default App;