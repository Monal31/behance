import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';



import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';



import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home= () => {
  const handleSearchClick = () => {
    alert('invalid search')
  };

  
  return(
  
    <div>
    <Nav  className='navbar  sticky-top navbar-expand-lg navbar-light bg-light'>
      <a className="navbar-brand" href="#"><img src='/image2.png' alt='logo' className='logo'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse ml-auto" id="navbarContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">For You </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Discover </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Hire</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Assets</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Jobs</a>
          </li> 
         </ul>
         </div>
         <div>
         <ul className="navbar-nav ml-auto">
          <li className='nav-item ml-auto active'>
          <div className="navbar-nav">
          <Link to="/Login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
           </div>
          </li>
          </ul>
          </div>
    </Nav>
    <div >
  {/* Second Navbar */}
  <div >
  <div className="row">
        {/* Search Form */}
        <div className="col-lg-6">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light" onClick={handleSearchClick}>Search</Button>
          </Form>
        </div >
        {/* Dropdown */}
        
        <div className="col-lg-6 dropdown">
          <Button  variant="dark">recommended
            
            <NavDropdown title='sort'>
              <NavDropdown.Item href="#action3">Curated</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Appreciated</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Most Viewed</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Most Discussed</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Most Recent</NavDropdown.Item>
            </NavDropdown> 
          </Button>
        </div>
      </div>
      </div>
   
    </div>
    <div >
    
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <div className="image-container " >
            <img src='/img1.png' alt="img1" width="100%"  />
            <div className="overlay"><a href={'/img1.png'} download={'/img1.png'}>Download</a>
          </div>
          </div>
          <p className='content'>The natural skill of painting<a href=''>Andrija Tadejevic</a></p>
        </Col>
        
        <Col xs={12} md={6} lg={4}>
          <div className="image-container">
            <img src='/img2.png' alt="img2" width="100%" />
            <div className="overlay"><a href={'/img1.png'} download={'/img1.png'}>Download</a>
          
        </div>
          </div>
          <p className='content'>The world of imersive eating<a href=''>Pan Chuxiong</a></p>
        </Col>
        <Col xs={12} lg={4}>
          <div className="image-container">
            <img src='/img3.png' alt="img3" width="100%" />
            <div className="overlay"><a href={'/img1.png'} download={'/img1.png'}>Download</a> </div>
          </div>
          <p className='content'>Could be as faster as metro<a href=''>Siam Gfx9</a></p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <div className="image-container">
            <img src='/img4.png' alt="img4" width="100%" />
            <div className="overlay"><a href={'/img1.png'} download={'/img1.png'}>Download</a> </div>
          </div>
          <p className='content'>At the spot of whole peace<a href=''>Breno Loeser</a></p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="image-container">
            <img src='/img5.png' alt="img5" width="100%" />
            <div className="overlay"><a href={'/img1.png'} download={'/img1.png'}>Download</a></div>
          </div>
          <p className='content'>Have ever gone with this <a href=''>Maggie Enterrios</a></p>
          
        </Col>
        <Col xs={12} lg={4}>
          <div className="image-container">
            <img src='/img6.png' alt="img6" width="100%" />
            <div className="overlay"><a href={'/img1.png'} download={'/img1.png'}>Download</a> </div>
          </div>
          <p className='content'>Young Millien man working<a href=''>Pan Chuxiong</a></p>
        </Col>
      </Row>
      <Row>
      <Col xs={8} md={4} >
      <div className="image-container">
            <img src='/img7.png' alt="img7" width="100%" />
            <div className="overlay"><a href={'/img1.png'} download={'/img1.png'}>Download</a> </div>
          </div>
          <p className='content'>World of night life<a href=''>Breno Loeser</a></p>

        </Col>
        <Col xs={12} md={4}>
        <div className="image-container">
            <img src='/img8.png' alt="img8" width="100%" />
            <div className="overlay"><a href={'/img1.png'} download={'/img1.png'}>Download</a> </div>
          </div>
          <p className='content'>Fresh see breath<a href=''>Pan Chuxiong</a></p>

        </Col>

      </Row>
    </Container>
   
    </div>
</div>
  );
}

export default Home;
