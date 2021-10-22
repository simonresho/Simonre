import React from 'react';
import {   CardGroup,Card,} from 'react-bootstrap'


function Vmc() {
    return(
        <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Vision, Mission and values</h3>
                            <div className="underline mx-auto"></div>
                        </div>


                <CardGroup>
                        <Card>
                            <Card.Body>
                            <Card.Title className="col-md-12 text-center">Vision</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                            <Card.Title className="col-md-12 text-center">Mission</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                            <Card.Title className="col-md-12 text-center">Core Values</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                </CardGroup>




                    </div>
                </div>
            </section>
    )
};

export default Vmc;
