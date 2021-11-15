import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Navbar from './components/navbar/Navbar';
import { Logo } from './components/logo/Logo';
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Charts } from './pages/charts/Charts';
import { Categories } from './pages/categories/Categories';
import { About } from './pages/about/About';



function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div>
          <Logo />
          <Route path="/" exact component={Dashboard} />
          <Route path="/charts" exact component={Charts} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/about" exact component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;