import React from 'react';
import './App.css';
import Home from './components/Pages/HomePage/Home';
import appointment from './components/Pages/MakeAnAppointment/Appointment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Pages/Footerjs/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Appointment' exact component={appointment} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;