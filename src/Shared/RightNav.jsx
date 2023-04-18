import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from './Qzone';

const RightNav = () => {
    return (
        <div className=''>
            <h4>Login with</h4>
            <Button variant="outline-primary" className='mb-3'><FaGoogle className='text-warning me-2' />Login with Google</Button> 
            <Button variant="outline-secondary"><FaGithub className='me-2'/>Login with Github</Button>
            <h4 className='mt-4'>Find us on</h4>
            <ListGroup className='my-2'>
                <ListGroup.Item><FaFacebook className='text-primary me-2' /> Facebook</ListGroup.Item>
                <ListGroup.Item><FaTwitter className='text-primary me-2' /> Twitter</ListGroup.Item>
                <ListGroup.Item><FaInstagram className='text-danger me-2' /> Instagram</ListGroup.Item>
            </ListGroup>

            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;