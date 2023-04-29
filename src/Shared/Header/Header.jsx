import React, { useContext } from 'react';
import logo from '.././../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { contextProvider } from '../../provider/AuthProvider';

const Header = () => {
    const {user, userLogout} = useContext(contextProvider);

    const handleLogout = () =>{
        userLogout()
        .then(result=>{})
        .catch(error =>{})
    }
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
                            <Nav.Link href=''>{!user ? <FaUserCircle></FaUserCircle> : user.email}</Nav.Link>
                            <Nav.Link href=''> {
                                user ? <Link><Button variant="dark" onClick={handleLogout}>Log Out</Button></Link> :
                                <Link to='/login'><Button variant="dark">Log in</Button></Link>
                            }</Nav.Link>
                             
                        </Nav>
                      </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;