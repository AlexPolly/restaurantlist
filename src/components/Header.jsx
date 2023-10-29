import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
     <Navbar style={{backgroundColor:'white'}}  className="">
    <Container>
      <Navbar.Brand >
     <Link to={'/'} className='fs-3' style={{textDecoration: 'none',color:'black'}} >
     <i className="fa-solid fa-mug-hot"></i>{' '}
     De Cafes
     </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
    </>
  )
}

export default Header