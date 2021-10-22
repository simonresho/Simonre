import React from 'react';
import {Carousel} from 'react-bootstrap';
import Service1 from '../images/Slider1.jpg';
import Service2 from '../images/Slider2.jpg';
import Service3 from '../images/Slider3.jpg';


function Slider() {
    return(
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="first"
                    src={Service1}
                    alt="First slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="second"
                    src={Service2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="third"
                    src={Service3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>


        </div>
            )
        }

export default Slider;