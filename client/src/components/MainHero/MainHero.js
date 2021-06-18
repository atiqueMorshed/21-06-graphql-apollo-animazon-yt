import React from 'react'
import "./MainHero.css"
import animals from "../../assets/images"
import {Container} from "reactstrap"

import {useQuery, gql} from '@apollo/client';

const GET_MAIN_HERO = gql`
    query {
        mainCards {
            id
            title
            image
        }
    }
`;

function MainHero() {
    const {loading, data, error} = useQuery(GET_MAIN_HERO);

    if(loading) {
        return <h2>Loading...</h2>;
    }

    else if(error) {
        return <h2>Error fetching MAIN HERO data</h2>;
    }

    else if(data) {
        return (
            <div className="MainHero">
                <Container>
                        <div className="header-container">
                            <h2>Find your <br/> new four-legged <br/> best friend</h2>
                            <img src={animals.rhino} alt="animal" />
                        </div>
                        <div className="cards-container">
                            {data.mainCards.map(card => {
                                return (
                                    <div className="card" key={card.id}>
                                        <h3>{card.title}</h3>
                                        <img src={animals[card.image]} style={{width: "100%"}} alt="animal" />
                                    </div>
                                )
                            })}
                        </div>
                </Container>
            </div>
        );
    }
}

export default MainHero
