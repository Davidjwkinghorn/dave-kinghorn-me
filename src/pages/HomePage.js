import React from 'react';
import {Carousel, Jumbotron} from "react-bootstrap";
import './HomePage.scss';

/**
 * Quote object representation of a randomly selected quote from the database.
 */
class Quote {
    constructor() {
        /** Parse inline JSON quote. This is a placeholder for quotes pulled from database. */
        var quoteList = JSON.parse('[{"text": "You can never get a cup of tea large enough or a book long enough to suit me.", "author": "C.S. Lewis"}]');

        /** Select a random quote. */
        var quoteId = Math.floor(Math.random() * quoteList.length);

        /** Set attributes of quote. */
        this.text = quoteList[quoteId].text;
        this.author = quoteList[quoteId].author;
    }
}

var quote = new Quote();

const HomePage = () => (
    <>
        <Carousel>
            <Carousel.Item className="carousel-item">
                <img
                    className="d-block w-100"
                    id="carousel-image"
                    src={process.env.PUBLIC_URL + '/assets/images/london.jpg'}
                    alt="London Cityscape at night."
                />
                <Carousel.Caption>
                    <h3 className="carousel-caption-h3">Born</h3>
                    <p className="carousel-caption-p">in England.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    id="carousel-image"
                    src={process.env.PUBLIC_URL + '/assets/images/lexington1.jpg'}
                    alt="Lexington Massachusetts Depot Square."
                />
                <Carousel.Caption>
                    <h3 className="carousel-caption-h3">Raised</h3>
                    <p className="carousel-caption-p">in Lexington Massachusetts.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    id="carousel-image"
                    src={process.env.PUBLIC_URL + '/assets/images/rit.jpg'}
                    alt="Rochester Institute of Technology"
                />
                <Carousel.Caption className="carousel-caption">
                    <h3 className="carousel-caption-h3">Studying</h3>
                    <p className="carousel-caption-p">Software Engineering at the Rochester Institute of
                        Technology.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Jumbotron fluid className="page-quote">
            <div className="quote-container">
                <p className="quote">"{quote.text}"<br/>- {quote.author}</p>
            </div>
        </Jumbotron>
    </>
);

export default HomePage;