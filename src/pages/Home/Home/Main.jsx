import React from 'react';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../../Shared/LeftNav';
import RightNav from '../../../Shared/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col className='col-3'>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col className='col-6'>Main is coming</Col>
                    <Col className='col-3'>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;