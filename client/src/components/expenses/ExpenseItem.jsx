import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import './ExpenseItem.css';


class ExpenseItem extends Component {

    render() {
        return (
            <div className="expense-item">
                {/* {console.log(props.expense.date.substring(0, 10).split("-"))} */}
                <div className="expense-item-information">
                    <div>{this.props.expense.memo}</div>
                    <div>
                        {
                            this.props.expense.categoryType === "expense" ?
                                "- " + this.props.expense.total :
                                this.props.expense.total
                        }
                    </div>
                </div>
                {/* <Link
                    className="edit-option-item"
                    to={"/edit/" + this.props.expense._id}>
                    <FontAwesomeIcon className="edit-option-item-icon" icon={faEdit} />
                </Link> */}
                {/* <a
                    className="delete-option-item"
                    href="/"
                    onClick={() => { this.props.deleteExpense(this.props.expense._id) }}>
                    <FontAwesomeIcon className="delete-option-item-icon" icon={faTimes} />
                </a> */}
            </div>

        )
    }
}

export { ExpenseItem }