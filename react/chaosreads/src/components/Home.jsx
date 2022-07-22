import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import BookDisplay from "./books/BookDisplays";

const Home = () => {
  return (
    <>
      <Container fluid className="m-6 p-4">
        <Row>
          <Col bg="dark">
            <BookDisplay />
          </Col>{" "}
          <Col>
            <BookDisplay />
          </Col>{" "}
          <Col>
            <BookDisplay />
          </Col>{" "}
        </Row>
      </Container>
      <Container>
        <Row>
          <Card>
            <Card.Body>
              <Card.Text>
                This is the test that I'd love for your viewers to see!!
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Home;
