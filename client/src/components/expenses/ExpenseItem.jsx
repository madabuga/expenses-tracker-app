import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';

import './ExpenseItem.css';


class ExpenseItem extends Component {

    render() {
        let categories = this.props.categories

        return (
            <div className="expense-item">
                {/* {console.log(props.expense.date.substring(0, 10).split("-"))} */}
                <div className="expense-item-information">
                    <div className="category-icon-and-memo">
                        {
                            categories.map(category => {
                                return (
                                    (category.name === this.props.expense.categoryName) &&
                                    <div key={category._id + category.name} className="icon-category-info">
                                        <div
                                            className="icon-container-style"
                                            style={{ backgroundColor: category.backgroundColor, color: category.color }}>
                                            <FontAwesomeIcon
                                                className="single-category-item-icon-style"
                                                icon={icon[category.icon]} />
                                        </div>
                                        <div key={category._id}>{this.props.expense.categoryName}</div>
                                    </div>
                                )
                            })
                        }
                        <div className="vertical-bar"></div>
                        <span className="memo-title-in-table">Memo:</span>
                        <div>{this.props.expense.memo}</div>
                    </div>
                    <div className="total-expense-or-income">
                        {
                            this.props.expense.categoryType === "Expense" ?
                                "- " + this.props.expense.total :
                                this.props.expense.total
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export { ExpenseItem }