import React, { useState } from 'react'
import "./CategoryDisplay.css"
import { Container } from 'react-bootstrap'
import animals from '../../assets/images'

import { Link } from "react-router-dom"

import {useQuery, gql} from '@apollo/client';

const GET_CATEGORIES = gql`
    query {
        categories {
            id
            slug
            category
            image
        }
    }
`;

function CategoryDisplay() {

    const {loading, error, data} = useQuery(GET_CATEGORIES);

    if(error) {
        return <h2>Error!</h2>;
    }
    if(loading) {
        return <h2>Loading...</h2>
    }
    if(data) {
        return (
            <div className="CategoryDisplay">
                <Container className="CategoryDisplay-container">
                    {data.categories.map(category => {
                        return (
                            <Link to={`/products/${category.slug}`} className="CategoryDisplay-card-container" key={category.id}>
                                <div className="CategoryDisplay-card">
                                    <img src={animals[category.image]} /> 
                                </div>
                                <h3>{category.category}</h3>
                            </Link>
                        )
                    })}
                </Container>
            </div>
        );
    }
}

export default CategoryDisplay
