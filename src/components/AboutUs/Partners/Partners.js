import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

class Partners extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h3>Our Partners</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Partners;