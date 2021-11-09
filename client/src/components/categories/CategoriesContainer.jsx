import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

import { CATEGORY_TYPE } from '../../constants/categories.js';
import { AddNewCategoryForm } from './AddNewCategoryForm';

import "./CategoriesContainer.css";


class CategoriesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddNewCategoryOpen: false
        };
    }

    renderAddNewCategoryOnClick = () => {
        this.setState({ isAddNewCategoryOpen: true })
    }

    handleAddNewCategoryFormCallback = (dataChild) => {
        this.setState({ isAddNewCategoryOpen: dataChild })
    }

    render() {
        let categories = this.props.categories
        return (
            <div>
                {this.state.isAddNewCategoryOpen && <AddNewCategoryForm parentCategoryContainerCallback={this.handleAddNewCategoryFormCallback} />}
                <div
                    className="add-new-category-btn"
                    onClick={this.renderAddNewCategoryOnClick}>
                    Add a new category
                </div>
                <div className="categories-container">
                    {
                        CATEGORY_TYPE.map((categoryType, index) => {
                            return (
                                <div key={index}>
                                    <p className="categories-container-p-title">{categoryType}:</p>
                                    <div className="categories-display" >
                                        {
                                            categories.map(category => {
                                                return (category.type === categoryType) &&
                                                    <div className="single-category-item" key={category.id} >
                                                        <div
                                                            className="icon-container"
                                                            style={{ backgroundColor: category.backgroundColor, color: category.color }}>
                                                            <FontAwesomeIcon
                                                                className="single-category-item-icon"
                                                                icon={icons[category.icon]} />
                                                        </div>
                                                        <p className="single-category-item-text-name">{category.name}</p>
                                                    </div>

                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export { CategoriesContainer }