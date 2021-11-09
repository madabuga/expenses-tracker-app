import React, { Component } from 'react';
import axios from 'axios';

import { CategoriesContainer } from '../../components/categories/CategoriesContainer';

import "./Categories.css";


class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/categories/')
            .then(response => {
                this.setState({ categories: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="categories-page">
                <CategoriesContainer categories={this.state.categories} />
            </div>
        )
    }
}

export { Categories }