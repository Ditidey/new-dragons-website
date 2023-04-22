import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import RightNav from '../Shared/RightNav';

const NewsLayout = () => {
    return (
        <div>
             <Header></Header>
            <Container>
                <Row>
                    <Col className='col-6'>
                        <Outlet></Outlet>
                        </Col>
                    <Col className='col-3'>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;