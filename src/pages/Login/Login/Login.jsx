import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='mx-auto w-25'>
            <h3>please login</h3>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' required placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />

      <Form.Text className="text-black">
         Dont have a account <Link className='text-danger' to="/register">register</Link>
        </Form.Text>
      <Form.Text className="text-danger">
         
        </Form.Text>
      <Form.Text className="text-success">
        </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;