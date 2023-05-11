import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Operatinghours from './Operatinghours';
import Review from './Review';

function Resview() {

    const [restList, setRest] = useState([])

    //api to accesdata
    const getData = async () => {
        const result = await fetch('/Restaurants.json')
        result.json().then(data => setRest(data.restaurants))
    }

    //create object for useParams
    const params = useParams()
    console.log(params.id);

    //find single restaurantdata
    const restData = restList.find(i => i.id == params.id)
    console.log(restData);

    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            {
                restData ?
                    (<Row>
                        <Col lg={6} md={6}>
                            <img className='w-75 p-5 container ms-5' style={{ height: '600px' }} src={restData.photograph} alt="" />
                        </Col>
                        <Col lg={6} md={6} className='mt-5 fs-5 p-3'>
                            <ListGroup  className='pe-5'  >
                                <ListGroup.Item className='text-primary'><h1 >{restData.name}</h1></ListGroup.Item>
                                <ListGroup.Item><strong>address         :</strong>{restData.address}</ListGroup.Item>
                                <ListGroup.Item><strong>neighborhood    :</strong>{restData.neighborhood}</ListGroup.Item>
                                <ListGroup.Item><strong>cuisine type    :</strong>{restData.cuisine_type}</ListGroup.Item>
                                <ListGroup.Item>
                                    <Operatinghours workingtime={restData.operating_hours}></Operatinghours>
                                    <Review reviewList={restData.reviews}></Review>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>) : ""
            }
        </>
    )
}

export default Resview