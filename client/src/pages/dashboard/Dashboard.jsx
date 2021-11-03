import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import "./Dashboard.css";

import { ExpensesList } from "../../components/expenses/ExpensesList";


class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedMonth: new Date().getMonth() + 1
        }
    }

    handleOnDateChange = (event) => {
        this.setState({ selectedMonth: event.target.value.split("-")[1] })
    }

    render() {
        let currentMonth = new Date().getMonth() + 1
        if (currentMonth < 10) currentMonth = "0" + currentMonth
        let currentYear = new Date().getFullYear()

        return (
            <div className="dashboard-page">
                <div className="dashboard-header">
                    <input
                        type="month"
                        defaultValue={currentYear + "-" + currentMonth}
                        id="date"
                        min="2017-01"
                        onChange={(event) => this.handleOnDateChange(event)}
                    />
                    <Link
                        className="add-new-memo"
                        to={"/add/"}>
                        <div title="Add expense/income" className="add-new-memo-btn">+</div>
                    </Link>
                </div>
                <ExpensesList selectedMonth={this.state.selectedMonth} />

            </div>
        )
    }
}

export { Dashboard }