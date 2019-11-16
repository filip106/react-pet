import React from "react";
import WelcomeImage from '../../../assets/images/about-page-welcome-img.jpg';
import {Container, Row, Col, CardImg, Button} from 'react-bootstrap';

class Welcome extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <CardImg src={WelcomeImage} alt='welcome image'/>
          </Col>
          <Col xs={12} md={6}>
            <h3>Welcome to our site!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet architecto, ex inventore ipsum iste
              itaque, modi odio perferendis quis recusandae rem reprehenderit sapiente temporibus ut. Cum est iste
              neque.</p>
            <Button variant='primary'>Read more</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome;