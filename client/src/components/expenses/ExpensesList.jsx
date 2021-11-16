import React, { Component } from 'react';
import axios from 'axios';
import { ExpenseItem } from './ExpenseItem';

import './ExpensesList.css';
import { EditExpenseItem } from '../edit-expense-item/EditExpenseItem';


class ExpensesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
            categories: this.props.categories,
            expenseItemId: null
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
        return this.state.expenses.reverse().map((currentExpense, idx) => {
            let selectedMonth = Number(this.props.selectedMonth)
            let selectedYear = Number(this.props.selectedYear)
            let expenseMonth = Number(currentExpense.date.substring(0, 10).split("-")[1])
            let expenseYear = Number(currentExpense.date.substring(0, 10).split("-")[0])
            if ((selectedMonth === expenseMonth) && (selectedYear === expenseYear)) {
                return (
                    <div onClick={() => this.setState({ expenseItemId: currentExpense._id })} key={currentExpense._id}>
                        {/* <div>{currentExpense.date.substring(0, 10).split("-")[2]}/{currentExpense.date.substring(0, 10).split("-")[1]}</div> */}
                        <ExpenseItem
                            categories={this.props.categories}
                            expense={currentExpense}
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

    handleEditExpenseItemCallback = (itemId) => {
        this.setState({ expenseItemId: itemId })
    }

    render() {
        if (this.state.expenses) {
            return (
                <div className="expenses-list">
                    {
                        (this.state.expenseItemId) &&
                        <EditExpenseItem
                            expenses={this.state.expenses}
                            categories={this.props.categories}
                            idItem={this.state.expenseItemId}
                            selectedMonth={this.props.selectedMonth}
                            selectedYear={this.props.selectedYear}
                            parentExpensesListCallback={this.handleEditExpenseItemCallback}
                        />
                    }
                    {/* {this.orderExpensesList()} */}
                    {this.expensesList()}
                </div>
            )
        }
    }
}

export { ExpensesList }