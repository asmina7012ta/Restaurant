import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Review({ reviewList }) {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <Accordion className='mt-3 p-3' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header ><h6 >Review</h6></Accordion.Header>
                    <Accordion.Body>
                        {
                            reviewList.map(i =>
                                <div>
                                    <h5> {i.name}</h5>
                                    <p> {i.date}</p>
                                    <h6> {i.rating}</h6>
                                    <h6> {i.comments}</h6>
                                    <hr />
                                </div>

                            )}
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    )
}

export default Review