import React from 'react'
import { Container } from 'react-bootstrap'
import animals from "../../assets/images"
import star from "../../assets/svg/star.svg"
import "./AnimalPage.css"
import { useParams } from "react-router-dom"

import {useQuery, gql} from '@apollo/client';

const GET_ANIMAL = gql`
    query animal($slug: String!) {
        animal(slug: $slug) {
            title
            image
            price
            stock
            description
        }
    }
`;

function AnimalPage() {
    const { slug } = useParams();
    const {loading, error, data} = useQuery(GET_ANIMAL, {
        variables: {
            slug: slug
        }
    });

    if(loading) {
        return <h2>Loading...</h2>
    }
    if(error) {
        return <h2>Error!</h2>
    }
    if(data) {
        const {title, image, stock, price, description} = data.animal;
        return (
            <div className="py-5">
                <Container>
                    <div className="d-flex">
                        <img className="product-img"  style={{marginRight: "1rem"}} src={animals[image]}/>
                    <div className="text-container">
                            <h1>{title}</h1>
                            <div className="star-container">
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <div className="rating-stock-container">
                                    <p>1402 rating</p>
                                    <p>{stock} in stock</p>
                                </div>
                                
                            </div>
                            <div className="about-container">
                                <h4>About this Animal</h4>
                                {description.map((desc, idx) => <li key={idx}>{desc}</li>)}
                            </div>
                        </div>
                        <div className="cart-container border">
                            <p className="price"><span>CAD$ {price}</span></p>
                            <p className="delivery-time" >FREE delivery: Thursday, Feb 25 Details
                                <button className="buy-now-btn" style={{marginTop: "2rem"}}>
                                    Add to Cart
                                </button>
                                <button>
                                    Buy Now
                                </button>
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default AnimalPage
