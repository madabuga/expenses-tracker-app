import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { Dashboard } from "./pages/dashboard/Dashboard";


function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;