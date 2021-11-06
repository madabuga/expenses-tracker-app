import React, { Component } from 'react';
import { CATEGORY_ICONS } from '../../constants/categories.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

import "./Categories.css";


class Categories extends Component {


    render() {
        return (
            <div className="categories-page">
                <div className="choose-icon-container">
                    <p className="choose-icon-p-title">Choose an icon:</p>
                    <div className="icons-container">
                        {
                            CATEGORY_ICONS.map((icon, index) => {
                                return (
                                    <div
                                        key={index + icon.iconName}
                                        className="category-icon-container">
                                        <FontAwesomeIcon
                                            className="category-icon"
                                            icon={icons[icon.iconName]} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export { Categories }