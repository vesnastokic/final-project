import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './ActivitiesPage.css'; 
import ActivityList from './ActivityList';

const ActivitiesPage = () => {
  return (
    <div className="activities-page" style={{ backgroundImage: 'url("https://images.all-free-download.com/images/graphicthumb/abstract_background_template_for_style_design_267606.jpg")' }}>
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
