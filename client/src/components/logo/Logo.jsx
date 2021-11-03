import React, { Component } from 'react';

import "./Logo.css";


class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img className="icon-logo" src={process.env.PUBLIC_URL + '/assets/images/budgeting.png'} alt="budgeting" />
                <div className="text-logo">
                    <div className="first-text-logo">Expenses Traker</div>
                    <div className="line-logo"></div>
                    <div className="second-text-logo">Manage your personal expenses.</div>
                </div>
            </div>
        )
    }
}

export { Logo }