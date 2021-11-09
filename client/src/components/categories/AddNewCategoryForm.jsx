import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

import { CATEGORY_ICONS } from '../../constants/categories.js';

import "./AddNewCategoryForm.css";


class AddNewCategoryForm extends Component {

    onTrigger = () => {
        this.props.parentCategoryContainerCallback(false);
    }

    render() {
        return (
            <div className="blur-container">
                <div className="add-new-category-container-form">
                    <FontAwesomeIcon onClick={this.onTrigger} className="close-window-popup-icon" icon={icons.faTimes} />
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
            </div>
        )
    }
}

export { AddNewCategoryForm }