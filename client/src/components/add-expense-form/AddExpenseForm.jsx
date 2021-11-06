import React, { Component } from 'react';

import "./AddExpenseForm.css";


class AddExpenseForm extends Component {

    render() {
        return (
            <div className="blur-container">
                <div className="add-expense-form">
                    <div className="div-p-title">
                        <p>Complete the fields below for </p>
                        <p>adding a new expense / income</p>
                    </div>
                    <input type="text" placeholder="Memo" />
                    <input type="number" placeholder="Total: 0.00" />
                    <select>
                        <option selected disabled hidden>Select type</option>
                        <option>Expense</option>
                        <option>Income</option>
                    </select>
                    <select>
                        <option selected disabled hidden>Select a category</option>
                        <option>Shopping</option>
                        <option>Bills</option>
                    </select>
                    <input type="month" defaultValue={2021 + "-" + this.props.selectedMonth} />
                    <button className="confirm-btn-add-expense-income">CONFIRM</button>
                </div>
            </div>
        )
    }
}

export { AddExpenseForm }