import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"

import {useQuery, useMutation, gql} from '@apollo/client';

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

const ADD_ANIMAL = gql`
 mutation addAnimal(
        $image: String!
        $title: String!
        $rating: Float!
        $price: String!
        $description: [String!]!
        $stock: Int!
        $slug: String!
        $category: String!
    ) {
    addAnimal(
        image: $image
        title: $title
        rating: $rating
        price: $price
        description: $description
        stock: $stock
        slug: $slug
        category: $category
    ) {
        id
    }
 }
`;

function LandingPage() {

    const {loading, data, error} = useQuery(GET_ANIMALS);
    const [addAnimal] = useMutation(ADD_ANIMAL);
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
                <button onClick={() => addAnimal({
                    variables: {
                        image: "cat",
                        title: "Big BOi Cat",
                        rating: 5.0,
                        price: "69,123",
                        description: ["YOYO", "YELLO"],
                        stock: 18,
                        slug: "catto",
                        category: "1"
                    }
                })}>ADD ANIMAL</button>
            </div>
        );
    }
}

export default LandingPage
