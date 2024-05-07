// Importing necessary components and styles
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './ActivitiesPage.css'; // Import custom CSS styles
import ActivityList from './ActivityList'; // Import ActivityList component

// Functional component for the Activities page
const ActivitiesPage = () => {
  return (
    // Main container for the Activities page with background image
    <div className="activities-page" style={{ backgroundImage: 'url("https://images.all-free-download.com/images/graphicthumb/abstract_background_template_for_style_design_267606.jpg")' }}>
      {/* Container to hold page content */}
      <Container>
        {/* Title heading for the Activities page */}
        <h1 className="text-center mt-5">Activities for Kids</h1>
        {/* Row component to hold content, horizontally centered */}
        <Row className="justify-content-center">
          {/* Column component to control layout on different screen sizes */}
          <Col xs={12} md={8} lg={6}>
            {/* Card component to display ActivityList */}
            <Card className="my-4">
              {/* Card body containing ActivityList component */}
              <Card.Body>
                {/* Render the ActivityList component */}
                <ActivityList />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div> 
  );
};

// Exporting the ActivitiesPage component as the default export
export default ActivitiesPage;
