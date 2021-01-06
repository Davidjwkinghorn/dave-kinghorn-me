import React from 'react';
import {Carousel} from "react-bootstrap";
import './HomePage.scss';
import {Parallax} from "react-scroll-parallax";


/**
 * Quote object representation of a randomly selected quote from the database.
 */
class Quote {
    constructor() {
        /** Parse inline JSON quote. This is a placeholder for quotes pulled from database in an update to come. */
        var quoteList = JSON.parse('[{"text": "You can never get a cup of tea large enough or a book long enough to suit me.", "author": "C.S. Lewis"},{"text": "All you need is love. But a little chocolate now and then doesn\'t hurt.", "author": "Charles M. Schulz"}]');

        /** Select a random quote. */
        var quoteId = Math.floor(Math.random() * quoteList.length);

        /** Set attributes of quote. */
        this.text = quoteList[quoteId].text;
        this.author = quoteList[quoteId].author;
    }
}

var quote = new Quote();

// Database query placeholder
var carouselDBQuery = {"carouselItems": [
    {
        "image": process.env.PUBLIC_URL + '/assets/images/london.jpg',
        "caption1": "Born",
        "caption2": "in England.",
        "altText": "London Cityscape at night."
    },{
        "image": process.env.PUBLIC_URL + '/assets/images/lexington1.jpg',
        "caption1": "Raised",
        "caption2": "in Lexington, Massachusetts.",
        "altText": "A sunny day in Lexington, Massachusetts' Depot Square."
    },{
        "image": process.env.PUBLIC_URL + '/assets/images/rit.jpg',
        "caption1": "Studied",
        "caption2": "Software Engineering at the Rochester Institute of Technology.",
        "altText": "Rochester Institute of Technology"
    }
]}

function costructCarousel(carouselDBQuery) {
    return <>
    <Carousel>
        {CarouselItem(process.env.PUBLIC_URL + '/assets/images/london.jpg',
        "Born", 
        "in England.", 
        "London Cityscape at night.")}
        {CarouselItem(process.env.PUBLIC_URL + '/assets/images/lexington1.jpg',
        "Raised",
        "in Lexington, Massachusetts.", 
        "A sunny day in Lexington, Massachusetts' Depot Square.")}
        {CarouselItem(process.env.PUBLIC_URL + '/assets/images/rit.jpg',
        "Studied", 
        "Software Engineering at the Rochester Institute of Technology.", 
        "Rochester Institute of Technology")}
    </Carousel>
</>
}

const BioCarousel = () => {
    
    // createCarouselItem(carouselItem) {
    //     return <Carousel.Item className="carousel-item">
    //         <img
    //             className="d-block w-100"
    //             id="carousel-image"
    //             src={carouselItem["image"]}
    //             alt={carouselItem["altText"]}
    //         />
    //         <Carousel.Caption>
    //             <h3 className="carousel-caption-h3">{carouselItem["caption1"]}</h3>
    //             <p className="carousel-caption-p">{carouselItem["caption2"]}.</p>
    //         </Carousel.Caption>
    //     </Carousel.Item>
    // }

}



const CarouselItem = (image, caption1, caption2, altText) => (
    <Carousel.Item className="carousel-item">
        <img
        className="d-block w-100"
        id="carousel-image"
        src={image}
        alt={altText}
        />
        <Carousel.Caption>
            <h3 className="carousel-caption-h3">{caption1}</h3>
            <p className="carousel-caption-p">{caption2}.</p>
        </Carousel.Caption>
        </Carousel.Item>
)

const HomeCarousel = () => (
    <>
        <Carousel>
            {CarouselItem(process.env.PUBLIC_URL + '/assets/images/london.jpg',
            "Born", 
            "in England.", 
            "London Cityscape at night.")}
            {CarouselItem(process.env.PUBLIC_URL + '/assets/images/lexington1.jpg',
            "Raised",
            "in Lexington, Massachusetts.", 
            "A sunny day in Lexington, Massachusetts' Depot Square.")}
            {CarouselItem(process.env.PUBLIC_URL + '/assets/images/rit.jpg',
            "Studied", 
            "Software Engineering at the Rochester Institute of Technology.", 
            "Rochester Institute of Technology")}
        </Carousel>
    </>
);

const HomeQuote = () => (
    <>
        <div className="page-quote">
            <div className="quote-container">
                <p className="quote">"{quote.text}"<br/>- {quote.author}</p>
            </div>
        </div>
    </>
);

// const HomeAboutMe = () => (
//     <>
//         <h2 className="home-about-me-subtitle">Hello world!</h2>
//         <Table>
//             <Row>
//                 <Col>
//                     <h3>Col 1</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu diam venenatis, sodales
//                         ipsum eget, tempus sem. Cras ut ornare orci. Proin elit felis, aliquet aliquet sem in,
//                         volutpat molestie lectus. Cras ultricies ultrices congue. Pellentesque fringilla rhoncus
//                         dictum.</p>
//                 </Col>
//                 <Col>
//                     <h3>Col 2</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu diam venenatis, sodales
//                         ipsum eget, tempus sem. Cras ut ornare orci. Proin elit felis, aliquet aliquet sem in,
//                         volutpat molestie lectus. Cras ultricies ultrices congue. Pellentesque fringilla rhoncus
//                         dictum.</p>
//                 </Col>
//                 <Col>
//                     <h3>Col 3</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu diam venenatis, sodales
//                         ipsum eget, tempus sem. Cras ut ornare orci. Proin elit felis, aliquet aliquet sem in,
//                         volutpat molestie lectus. Cras ultricies ultrices congue. Pellentesque fringilla rhoncus
//                         dictum.</p>
//                 </Col>
//                 <Col>
//                     <h3>Col 4</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu diam venenatis, sodales
//                         ipsum eget, tempus sem. Cras ut ornare orci. Proin elit felis, aliquet aliquet sem in,
//                         volutpat molestie lectus. Cras ultricies ultrices congue. Pellentesque fringilla rhoncus
//                         dictum.</p>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <h3>Col 1</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu diam venenatis, sodales
//                         ipsum eget, tempus sem. Cras ut ornare orci. Proin elit felis, aliquet aliquet sem in,
//                         volutpat molestie lectus. Cras ultricies ultrices congue. Pellentesque fringilla rhoncus
//                         dictum.</p>
//                 </Col>
//                 <Col>
//                     <h3>Col 2</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu diam venenatis, sodales
//                         ipsum eget, tempus sem. Cras ut ornare orci. Proin elit felis, aliquet aliquet sem in,
//                         volutpat molestie lectus. Cras ultricies ultrices congue. Pellentesque fringilla rhoncus
//                         dictum.</p>
//                 </Col>
//                 <Col>
//                     <h3>Col 3</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu diam venenatis, sodales
//                         ipsum eget, tempus sem. Cras ut ornare orci. Proin elit felis, aliquet aliquet sem in,
//                         volutpat molestie lectus. Cras ultricies ultrices congue. Pellentesque fringilla rhoncus
//                         dictum.</p>
//                 </Col>
//             </Row>
//         </Table>
//     </>
// );

export default class HomePage extends React.Component {
    state = {value: 0, previous: 0};

    render() {
        return (
            <>
                <Parallax className="home-carousel" y={[0, 0]} styles="z-index: 2;">
                    {costructCarousel(carouselDBQuery)}
                </Parallax>
                <Parallax className="home-quote" y={[0, 0]} styles="z-index: 1;">
                    <HomeQuote/>
                </Parallax>
                {/*<Parallax className="home-about-me" y={[0, 0]} styles="z-index: 2;">*/}
                {/*    <HomeAboutMe/>*/}
                {/*</Parallax>*/}
            </>
        )
    }
}