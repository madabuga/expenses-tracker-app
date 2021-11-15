import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

import "./Navbar.css";

import { NAVBAR_ITEMS } from '../../constants/navbar.js';


class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentURL: this.props.history.location.pathname
        }
    }

    componentDidMount() {
        return this.props.history.listen((location) => {
            this.setState({ currentURL: location.pathname })
        })
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-content">
                    {
                        NAVBAR_ITEMS.map((item, index) => {
                            return (
                                <div>
                                    {
                                        (this.state.currentURL === "/" + item.pathTo) ?
                                            <Link key={index} to={item.pathTo} className="navbar-item item-active">
                                                <FontAwesomeIcon className="navbar-icon" icon={icons[item.iconName]} />
                                                <span className="navbar-item-name">{item.name}</span>
                                            </Link> :
                                            <Link key={index} to={item.pathTo} className="navbar-item">
                                                <FontAwesomeIcon className="navbar-icon" icon={icons[item.iconName]} />
                                                <span className="navbar-item-name">{item.name}</span>
                                            </Link>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar)