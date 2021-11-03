import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { Navbar } from './components/navbar/Navbar';
import { Logo } from './components/logo/Logo';
import { Dashboard } from "./pages/dashboard/Dashboard";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div>
          <Logo />
          <Route path="/" exact component={Dashboard} />
        </div>
      </div>
    </Router>
  );
}

export default App;