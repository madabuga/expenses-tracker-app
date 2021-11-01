import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Expense = props => (
    <tr>
        <td>{props.expense.memo}</td>
        <td>{props.expense.total}</td>
        <td>{props.expense.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.expense._id}>edit</Link> <a href="/" onClick={() => { props.deleteExpense(props.expense._id) }}>delete</a>
        </td>
    </tr>
)

class ExpensesList extends Component {
    constructor(props) {
        super(props);

        this.state = { expenses: [] };
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
            return <Expense expense={currentExpense} deleteExpense={this.deleteExpense} key={currentExpense._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Expenses</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Memo</th>
                            <th>Total</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.expensesList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export { ExpensesList }