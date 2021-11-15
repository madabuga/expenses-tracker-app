import React, { Component } from 'react';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import "./Dashboard.css";

import { ExpensesList } from '../../components/expenses/ExpensesList';
import { TotalTracker } from '../../components/total-tracker/TotalTracker';
import { AddExpenseForm } from '../../components/add-expense-form/AddExpenseForm';


class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedMonth: new Date().getMonth() + 1,
            data: [],
            isPressedAddExpenseBtn: false,
            categories: []
            // numberOfDaysInSelectedMonth: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/categories/')
            .then(response => {
                this.setState({ categories: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleOnDateChange = (event) => {
        let eventValue = event.target.value
        this.setState({
            selectedMonth: Number(eventValue.split("-")[1]),
            // numberOfDaysInSelectedMonth: new Date(Number(eventValue.split("-")[0]), Number(eventValue.split("-")[1]), 0).getDate()
        })
    }

    handleCallback = (childData) => {
        this.setState({ data: childData })
    }

    handleAddExpenseFormCallback = (childData) => {
        this.setState({ isPressedAddExpenseBtn: childData })
    }

    renderAddForm = () => {
        this.setState({ isPressedAddExpenseBtn: true })
    }

    render() {
        let currentMonth = new Date().getMonth() + 1
        if (currentMonth < 10) currentMonth = "0" + currentMonth
        let currentYear = new Date().getFullYear()

        return (
            <div className="dashboard-page">
                {this.state.isPressedAddExpenseBtn &&
                    <AddExpenseForm
                        categories={this.state.categories}
                        parentDashboardCallback={this.handleAddExpenseFormCallback}
                        selectedMonth={this.state.selectedMonth} />}
                <div className="dashboard-header">
                    <input
                        type="month"
                        defaultValue={currentYear + "-" + currentMonth}
                        id="date"
                        min="2017-01"
                        onChange={(event) => this.handleOnDateChange(event)}
                    />
                    <div
                        className="add-new-memo"
                        onClick={this.renderAddForm}
                    >
                        <div title="Add expense/income" className="add-new-memo-btn">+</div>
                    </div>
                </div>
                <div className="expenses-container">
                    <ExpensesList
                        categories={this.state.categories}
                        selectedMonth={this.state.selectedMonth}
                        parentCallback={this.handleCallback} />
                    <TotalTracker
                        selectedMonth={this.state.selectedMonth}
                        expenses={this.state.data} />
                </div>

            </div>
        )
    }
}

export { Dashboard }