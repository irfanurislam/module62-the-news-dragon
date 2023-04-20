import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
        <Col lg={3}>
         <LeftNav></LeftNav>
        </Col>
        <Col lg={6}>
       <h2>main content coming</h2>
        </Col>
        <Col lg={3}>
        <RightNav></RightNav>
        </Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;