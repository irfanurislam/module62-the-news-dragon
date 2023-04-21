import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="mx-auto w-25">
      <h3>please register</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>name </Form.Label>
          <Form.Control
            type="text"
            name="name"
            
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicphoto">
          <Form.Label>photo url </Form.Label>
          <Form.Control
            type="text"
            name="photo"
            
            placeholder="Enter your photo url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="accept" label="accept terms condition" />
        </Form.Group>
        <Button variant="primary" type="submit">
          register
        </Button>
        <br />

        <Form.Text className="text-black">
          Already  have a account{" "}
          <Link className="text-danger" to="/login">
            register
          </Link>
        </Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <Form.Text className="text-success"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
