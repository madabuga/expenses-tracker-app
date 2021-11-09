import React, { Component } from 'react';
import axios from 'axios';
import { ExpenseItem } from './ExpenseItem';

import './ExpensesList.css';


class ExpensesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
            // orderedList: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/expenses/')
            .then(response => {
                this.setState({ expenses: response.data })
                this.onTrigger()
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

    // orderExpensesList() {
    //     let list = []
    //     // currentExpense.date.substring(0, 10).split("-")[2]
    //     for (let i = 1; i <= this.props.numberOfDaysInSelectedMonth; i++) {
    //         for (let j = 0; j <= this.state.expenses.length; j++) {
    //             console.log(this.state.expenses[j].date)
    //             // if (i === this.state.expenses[j].date.substring(0, 10).split("-")[2]) {
    //             //     // list.push(this.state.expenses[j])
    //             //     console.log("ok")
    //             // }
    //         }
    //     }
    //     // this.setState({ orderedList: list })
    // }

    expensesList() {
        return this.state.expenses.reverse().map(currentExpense => {
            if (Number(this.props.selectedMonth) === Number(currentExpense.date.substring(0, 10).split("-")[1])) {
                return (
                    <div key={currentExpense._id}>
                        {/* <div>{currentExpense.date.substring(0, 10).split("-")[2]}/{currentExpense.date.substring(0, 10).split("-")[1]}</div> */}
                        <ExpenseItem
                            expense={currentExpense}
                            deleteExpense={this.deleteExpense}
                            key={currentExpense._id} />
                    </div>
                )
            }
            return null
        })
    }

    onTrigger = () => {
        this.props.parentCallback(this.state.expenses);
    }

    render() {
        return (
            <div className="expenses-list">
                {/* {this.orderExpensesList()} */}
                {this.expensesList()}
            </div>
        )
    }
}

export { ExpensesList }