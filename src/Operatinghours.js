import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Operatinghours({workingtime}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Opening
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary' >Opening TIME</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup >
                                <ListGroup.Item>Monday--{workingtime.Monday}</ListGroup.Item>
                                <ListGroup.Item>Tuesday--{workingtime.Tuesday}</ListGroup.Item>
                                <ListGroup.Item>Wednesday--{workingtime.Wednesday}</ListGroup.Item>
                                <ListGroup.Item>Thursday--{workingtime.Thursday}</ListGroup.Item>
                                <ListGroup.Item>Friday--{workingtime.Friday}</ListGroup.Item>
                                <ListGroup.Item>Saturday--{workingtime.Saturday}</ListGroup.Item>
                                <ListGroup.Item>Sunday--{workingtime.Sunday}</ListGroup.Item>

                                
         </ListGroup>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Operatinghours