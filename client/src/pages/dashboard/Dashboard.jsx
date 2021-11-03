import React, { Component } from 'react';

import "./Dashboard.css";

import { ExpensesList } from "../../components/expenses/ExpensesList";


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-page">
                <ExpensesList />

            </div>
        )
    }
}

export { Dashboard }