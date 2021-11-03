import React, { Component } from 'react';
import axios from 'axios';
import { ExpenseItem } from './ExpenseItem';

import './ExpensesList.css';


class ExpensesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
            list: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/expenses/')
            .then(response => {
                this.setState({ expenses: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExpense(id) {
        axios.delete('http://localhost:5000/expenses/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            expenses: this.state.expenses.filter(el => el._id !== id)
        })
    }

    expensesList() {
        return this.state.expenses.map(currentExpense => {
            if (Number(this.props.selectedMonth) === Number(currentExpense.date.substring(0, 10).split("-")[1])) {
                return <ExpenseItem expense={currentExpense} deleteExpense={this.deleteExpense} key={currentExpense._id} />;
            }
            return null
        })
    }

    render() {
        return (
            <div className="expenses-list">
                {this.expensesList()}
            </div>
        )
    }
}

export { ExpensesList }