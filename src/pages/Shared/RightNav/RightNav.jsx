import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
const RightNav = () => {
    return (
        <div>
            <h2 className='mt-4'>Login with</h2>
            <Button className='mb-3' variant="outline-primary"> <FaGoogle /> login with google</Button>
            <Button variant="outline-secondary"><FaGithub /> login with github</Button>
        
        <div>
            <h4 className='mt-4'>Find us on</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebook></FaFacebook> facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
      
    </ListGroup>
        </div>
        <Qzone></Qzone>
        </div>
        
    );
};

export default RightNav;