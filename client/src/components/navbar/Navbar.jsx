import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

import "./Navbar.css";

import { NAVBAR_ITEMS } from '../../constants/navbar.js';


class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-content">
                    {
                        NAVBAR_ITEMS.map((item, index) => {
                            return (
                                <div key={index} className="navbar-item">
                                    <FontAwesomeIcon className="navbar-icon" icon={icons[item.iconName]} />
                                    <span className="navbar-item-name">{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export { Navbar }