import React, { Component } from 'react';

import "./Dashboard.css";

import { Navbar } from "../../components/navbar/Navbar";
import { ExpensesList } from "../../components/expenses/ExpensesList";


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-page">
                <Navbar />
                <ExpensesList />

            </div>
        )
    }
}

export { Dashboard }