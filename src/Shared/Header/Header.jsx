import React from 'react';
import logo from '.././../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>New Dragon News Here</p>
                <h5>{moment().format("dddd, MMMM D, YYYY")}</h5>
            </div>
            <div className='d-flex bg-dark'>
                <Button variant="danger">Breaking News</Button>
                <Marquee speed={100} className='text-warning'>
                    I can be a React component, multiple React components, or just some text...... I can be a React component, multiple React components, or just some text...
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
                <Container>
                      <Navbar.Collapse>
                        <Nav className='m-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href=''>About</Nav.Link>
                            <Nav.Link href=''>Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href=''>Profile</Nav.Link>
                            <Nav.Link href=''><Button variant="dark">Log in</Button></Nav.Link>
                             
                        </Nav>
                      </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;