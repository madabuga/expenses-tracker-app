import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import "./AddExpenseForm.css";


class AddExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            memo: '',
            total: '',
            type: 'Expense',
            category: 'Shopping',
            date: this.props.selectedYear + "-" + this.props.selectedMonth,
            categories: this.props.categories
        }
    }

    onChangeMemo = (e) => { this.setState({ memo: e.target.value }) }
    onChangeTotal = (e) => { this.setState({ total: e.target.value }) }
    onChangeType = (e) => { this.setState({ type: e.target.value }) }
    onChangeCategory = (e) => { this.setState({ category: e.target.value }) }
    onChangeDate = (e) => { this.setState({ date: e.target.value }) }

    onSubmit = (e) => {
        e.preventDefault();

        const newData = {
            memo: this.state.memo,
            total: Number(this.state.total),
            date: this.state.date,
            categoryType: this.state.type,
            categoryName: this.state.category
        }

        axios.post('http://localhost:5000/expenses/add', newData)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    onTrigger = () => {
        this.props.parentDashboardCallback(false);
    }

    render() {
        console.log(this.props.selectedMonth)
        return (
            <div className="add-blur-container">
                <form className="add-expense-form" onSubmit={this.onSubmit}>
                    <FontAwesomeIcon onClick={this.onTrigger} className="close-window-popup-icon" icon={faTimes} />
                    <div className="div-p-title">
                        <p>Complete the fields below for </p>
                        <p>adding a new expense / income</p>
                    </div>
                    <input type="text" required onChange={this.onChangeMemo} placeholder="Memo" />
                    <input required onChange={this.onChangeTotal} pattern="^\d*(\.\d{0,2})?$" placeholder="Total: 0.00" />
                    <select required onChange={this.onChangeType}>
                        <option>Expense</option>
                        <option>Income</option>
                    </select>
                    <select required onChange={this.onChangeCategory}>
                        {
                            this.state.categories.map(category => {
                                return (this.state.type === category.type) && <option key={category.name}>{category.name}</option>
                            })
                        }
                    </select>
                    <input type="month" onChange={this.onChangeDate} defaultValue={this.props.selectedYear + "-" + this.props.selectedMonth} />
                    <input type="submit" value="CONFIRM" className="confirm-btn-add-expense-income" />
                </form>
            </div>
        )
    }
}

export { AddExpenseForm }