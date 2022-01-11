import React, { useEffect, useState } from 'react';
import { Button, Carousel, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/img1.jpg'
import img2 from '../../../images/img2.jpg'
import img3 from '../../../images/img3.jpg'
import img4 from '../../../images/img4.jpg'
import img5 from '../../../images/img5.jpg'
import { Link } from 'react-router-dom';
import HomeData from './HomeData';

const Home = () => {
    const [rides, setRides] = useState([])
    
    useEffect(() => {
        fetch("https://immense-lake-80129.herokuapp.com/rides")
            .then(res => res.json())
            .then(data => setRides(data))
    }, [])
    return (
        <div>
            <h1 className='text-center my-5'>WELCOME TO OUR WORLD</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide" height="650px"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide" height="650px"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide" height="650px"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide" height="650px"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="Third slide" height="650px"
                    />

                </Carousel.Item>
            </Carousel>





            <h1 className="text-center my-5">Our Rides</h1>
            <Container>

                <Row xs={1} md={3} className="g-4">
                    {
                        rides.map(ride => <HomeData key={ride._id} ride={ride}></HomeData>)
                    }
                </Row>
                <Link to = "/rides"><Button className="my-3">See more</Button></Link>
                
            </Container>
            
        </div>
    );
};

export default Home;