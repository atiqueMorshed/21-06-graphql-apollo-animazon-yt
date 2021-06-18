import React from 'react'
import { useParams } from "react-router-dom"
import { Container } from 'react-bootstrap'
import CardDisplay from '../components/CardDisplay/CardDisplay'

import {useQuery, gql} from '@apollo/client';

const GET_CATEGORY_ANIMALS = gql`
    query category($slug: String!) {
        category(slug: $slug) {
            category
            animals{
                id
                title
                image
            }
        }
    }
`;

function CategoryPage() {
    
    const { slug } = useParams();
    console.log(slug);
    const {loading, error, data} = useQuery(GET_CATEGORY_ANIMALS, {
        variables: {
            slug
        }
    });
    if(loading) {
        return <h2>loading...</h2>;
    }
    if(error) {
        return <h2>Error: {error}</h2>;
    }
    if(data) {
        const {category, animals} = data.category;
        return (
            <div className="py-5">
                <Container>
                    <h1 className="text-capitalize">
                        {category}
                        <CardDisplay animals={animals} />
                    </h1>
                </Container>
            </div>
        );
    }
}

export default CategoryPage
