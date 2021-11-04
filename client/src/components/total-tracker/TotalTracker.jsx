import React, { Component } from 'react';

import './TotalTracker.css';


class TotalTracker extends Component {

    decimalTransform = (number) => {
        let decimalsNumber = String(number.toFixed(2)).split('.')[1].split('')
        if (decimalsNumber[0] === "0" && decimalsNumber[1] === "0") {
            return parseFloat(number).toFixed(0);
        } else if (decimalsNumber[1] === "0") {
            return parseFloat(number).toFixed(1);
        } else {
            return parseFloat(number).toFixed(2);
        }
    }

    render() {
        let totalTracker = [
            {
                name: "Income",
                total: 0
            },
            {
                name: "Expenses",
                total: 0
            },
            {
                name: "Balance",
                total: 0
            }
        ]
        this.props.expenses.forEach(currentExpense => {
            if (Number(this.props.selectedMonth) === Number(currentExpense.date.substring(0, 10).split("-")[1])) {
                if (currentExpense.categoryType === "income") {
                    totalTracker[0].total += currentExpense.total
                } else {
                    totalTracker[1].total += currentExpense.total
                }
            }
        })
        totalTracker[2].total = totalTracker[0].total - totalTracker[1].total

        return (
            <div className="total-tracker">
                {
                    totalTracker.map((element, index) => {
                        return (
                            <div key={index} className="total-tracker-item" >
                                <div className="total-type">{element.name}</div>
                                <div className="total-sum">{this.decimalTransform(element.total)}</div>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export { TotalTracker }