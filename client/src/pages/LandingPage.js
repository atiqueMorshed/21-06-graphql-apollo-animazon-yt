import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"

import {useQuery, gql} from '@apollo/client';

const GET_ANIMALS = gql`
    query {
        animals {
            id
            title
            image
            price
            slug
        }
    }
`;

function LandingPage() {

    const {loading, data, error} = useQuery(GET_ANIMALS);

    if(error) {
        return <h2>Error!</h2>;
    } 
    else if(loading) {
        return <h2>Loading...</h2>;
    }
    else if (data) {
        return (
            <div>
                <MainHero />
                <CategoryDisplay />
                <CardDisplay animals={data.animals}/>
            </div>
        );
    }
}

export default LandingPage
