import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './ActivitiesPage.css';
import ActivityList from './ActivityList';

const ActivitiesPage = () => {
  return (
    <Container>
      <h1 className="text-center mt-5">Activities for Kids</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="my-4">
            <Card.Img variant="top" src="https://www.splashlearn.com/blog/wp-content/uploads/2022/04/Team-building-activities-for-kids-Featured-Image.jpg" alt="Activities" />
            <Card.Body>
              <ActivityList />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivitiesPage;
