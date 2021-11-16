import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import "./EditExpenseItem.css";


class EditExpenseItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            memo: '',
            total: '',
            date: this.props.selectedYear + "-" + this.props.selectedMonth,
            type: '',
            category: '',
            categories: this.props.categories,
            expenses: this.props.expenses
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/expenses/' + this.props.idItem)
            .then(response => {
                this.setState({
                    memo: response.data.memo,
                    total: Number(response.data.total),
                    date: response.data.date,
                    type: response.data.categoryType,
                    category: response.data.categoryName
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeEditMemo = (e) => { this.setState({ memo: e.target.value }) }
    onChangeEditTotal = (e) => { this.setState({ total: e.target.value }) }
    onChangeDate = (e) => { this.setState({ date: e.target.value }) }
    onChangeType = (e) => { this.setState({ type: e.target.value }) }
    onChangeCategory = (e) => { this.setState({ category: e.target.value }) }

    onSubmit = (e) => {
        e.preventDefault();

        const updatedData = {
            memo: this.state.memo,
            total: Number(this.state.total),
            date: this.state.date,
            categoryType: this.state.type,
            categoryName: this.state.category
        }

        axios.post('http://localhost:5000/expenses/update/' + this.props.idItem, updatedData)
            .then(res => console.log(res.data));
        // ---------------------------------------------------------------------------------------------------------- 
        // ---------------------------------------------------------------------------------------------------------- 
        // to avoid the refresh at '/', send the new expenses list and the 'null' for id
        window.location = '/';
        // ---------------------------------------------------------------------------------------------------------- 
        // ---------------------------------------------------------------------------------------------------------- 
    }

    onTrigger = () => {
        this.props.parentExpensesListCallback(null);
    }

    deleteExpense = () => {
        axios.delete('http://localhost:5000/expenses/' + this.props.idItem)
            .then(response => { console.log(response.data) });

        // this.onTrigger()
        window.location = '/';
    }

    render() {
        return (
            <div className="blur-container">
                <form className="add-expense-form" onSubmit={this.onSubmit}>
                    <FontAwesomeIcon onClick={this.onTrigger} className="close-window-popup-icon" icon={faTimes} />
                    <input type="text" defaultValue={this.state.memo} required onChange={this.onChangeEditMemo} placeholder="Memo" />
                    <input defaultValue={this.state.total} required onChange={this.onChangeEditTotal} pattern="^\d*(\.\d{0,2})?$" placeholder="Total: 0.00" />
                    <select value={this.state.type} required onChange={this.onChangeType}>
                        <option>Expense</option>
                        <option>Income</option>
                    </select>
                    <select value={this.state.category} required onChange={this.onChangeCategory}>
                        {
                            this.state.categories.map(category => {
                                return (this.state.type === category.type) && <option key={category.name}>{category.name}</option>
                            })
                        }
                    </select>
                    {/* ---------------------------------------------------------------------------------------------------------- */}
                    {/* ---------------------------------------------------------------------------------------------------------- */}
                    <input type="month" required onChange={this.onChangeDate} defaultValue={this.props.selectedYear + "-" + this.props.selectedMonth} />
                    {/* ---------------------------------------------------------------------------------------------------------- */}
                    {/* ---------------------------------------------------------------------------------------------------------- */}
                    <input type="submit" value="UPDATE" className="confirm-btn-add-expense-income" />
                    <input onClick={this.deleteExpense} value="DELETE" className="confirm-btn-add-expense-income" />
                </form>
            </div>
        )
    }
}

export { EditExpenseItem }