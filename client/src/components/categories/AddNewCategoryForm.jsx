import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

import { CATEGORY_ICONS } from '../../constants/categories.js';

import "./AddNewCategoryForm.css";


class AddNewCategoryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenIcon: "",
            categoryType: "Expense",
            categoryName: "",
            backgroundColor: "rgb(129, 129, 129)",
            iconColor: "#000"
        };
    }

    onTrigger = () => {
        this.props.parentCategoryContainerCallback(false);
    }

    onChangeCategoryType = (e) => { this.setState({ categoryType: e.target.value }) }
    onChangeCategoryName = (e) => { this.setState({ categoryName: e.target.value }) }
    onChangeBackgroundColor = (e) => { this.setState({ backgroundColor: e.target.value }) }
    onChangeIconColor = (e) => { this.setState({ iconColor: e.target.value }) }

    onSubmit = (e) => {
        e.preventDefault();

        const newData = {
            type: this.state.categoryType,
            name: this.state.categoryName,
            icon: this.state.chosenIcon,
            backgroundColor: this.state.backgroundColor,
            color: this.state.iconColor
        }

        axios.post('http://localhost:5000/categories/add', newData)
            .then(res => console.log(res.data));

        window.location = '/categories/';
    }

    render() {
        return (
            <div className="blur-container">
                <div className="add-new-category-container-form">
                    <FontAwesomeIcon onClick={this.onTrigger} className="close-window-popup-icon" icon={icons.faTimes} />
                    {
                        this.state.chosenIcon === "" ? <div className="choose-icon-container">
                            <p className="choose-icon-p-title">Choose an icon:</p>
                            <div className="icons-container">
                                {
                                    CATEGORY_ICONS.map((icon, index) => {
                                        return (
                                            <div
                                                key={index + icon.iconName}
                                                onClick={() => { this.setState({ chosenIcon: icon.iconName }) }}
                                                className="category-icon-container">
                                                <FontAwesomeIcon
                                                    className="category-icon"
                                                    icon={icons[icon.iconName]} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div> :
                            <div className="choose-icon-container">
                                <form className="add-category-form" onSubmit={this.onSubmit}>
                                    <p className="form-category-p-title">Fill the below fields:</p>
                                    <select required onChange={this.onChangeCategoryType}>
                                        {/* <option selected disabled hidden>Select type</option> */}
                                        <option>Expense</option>
                                        <option>Income</option>
                                    </select>
                                    <input type="text" required onChange={this.onChangeCategoryName} placeholder="Category Name" />
                                    <p className="select-color-p-title">Select colors for icon and background circle:</p>
                                    <div className="color-for-icon-container">
                                        <div
                                            className="category-icon-container-form"
                                            style={{ backgroundColor: this.state.backgroundColor, color: this.state.iconColor }}>
                                            <FontAwesomeIcon className="category-icon" icon={icons[this.state.chosenIcon]} />
                                        </div>
                                        <div className="colors-box">
                                            <input onChange={this.onChangeIconColor} className="color-input" type="color" />
                                            <input onChange={this.onChangeBackgroundColor} className="color-input" type="color" />
                                        </div>
                                    </div>
                                    <input type="submit" value="DONE" className="confirm-btn-add-category" />
                                </form>
                            </div>
                    }

                </div>
            </div>
        )
    }
}

export { AddNewCategoryForm }