import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { ExpensesList } from "./components/expenses/ExpensesList";


function App() {
  return (
    <Router>
      <div className="container">
        <br />
        <Route path="/" exact component={ExpensesList} />
      </div>
    </Router>
  );
}

export default App;