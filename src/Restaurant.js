import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { RestaurantListAction } from './Actions/Restaction';

function Restaurant() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(RestaurantListAction)
    }, [])
    const {restList}= useSelector(state=>state.restaurantReducer)
    console.log(restList);
    return (

        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img id='d1'
                        className="d-block w-75"
                        src="https://media.istockphoto.com/id/943449226/photo/concept-promotional-flyer-and-poster-for-restaurants-or-pizzerias-template-with-delicious.jpg?s=612x612&w=0&k=20&c=Vx0Y5mSc6I3H-viPOgFlf-SKY3Uj-kAVbmY_S6Jl1So="
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>LIMITED TIME OFFER</p>
                        <h3 className='mb-5 me-5' style={{ color: '#FAF9F6', fontSize: '45px', fontWeight: 'bolder' }} > HOTTEST & <br /> TASTE <strong style={{ color: 'red' }}> PIZZA</strong> <br /> IN THIS TOWN</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img id='d1'
                        className="d-block w-75"
                        src="https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-fashion-food-poster-background-image_159294.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='mb-5 me-5' style={{ color: '#FAF9F6', fontSize: '45px', fontWeight: 'bolder' }}>It’s a Good Day To Be Hungry <br /> So Let’s Order Some Food</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img id='d1'
                        className="d-block w-75"
                        src="https://img.freepik.com/premium-photo/black-stone-food-background-cooking-ingredients-top-view-free-space-your-text_187166-14220.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='mb-5 me-5' style={{ color: 'white', fontSize: '45px', fontWeight: 'bolder' }}>FINEST PLACE FOR THE TRADITIONAL FOOD</h3>
                        <p>
                            The flavours come from the culture of nature
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row>
                {
                    restList.map(rest => (
                        <Col id='c1' className='p-2' lg={4} md={6} >
                            <Link id='l1' to={`/viewRes/${rest.id}`}>
                                <Card className='mt-5 ms-5' style={{ width: '17rem', height: '25rem' }}>
                                    <Card.Img variant="top" style={{ height: '18rem' }} src={rest.photograph} />
                                    <Card.Body>
                                        <Card.Title>{rest.name}</Card.Title>
                                        <Card.Text style={{ color: 'red' }}>
                                            {rest.address}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Link>
                        </Col>
                    ))}

            </Row>
        </div>
    )
}


export default Restaurant