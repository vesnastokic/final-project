// ActivitiesPage.js
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './ActivitiesPage.css'; 
import ActivityList from './ActivityList';

const ActivitiesPage = () => {
  return (
    <div className="activities-page" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1707760696486-2a2cd7e0b6a6?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <Container>
        <h1 className="text-center mt-5">Activities for Kids</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="my-4">
              <Card.Body>
                <ActivityList />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div> 
  );
};

export default ActivitiesPage;
