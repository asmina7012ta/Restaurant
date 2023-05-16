import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import'./Header.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div><Navbar bg="danger" variant="danger">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNdLLo7cq7m81J5i5i1u1c91TYEleV4G3qw&usqp=CAU"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
       <Link to={''} style={{textDecoration:'none',color:'Black'}} > <strong className='mt-3 p-3 ms-2 text-center'>OpenCusine</strong></Link>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header