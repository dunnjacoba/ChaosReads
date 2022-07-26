import React, { useState, useEffect } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import BookDisplay from "./books/BookDisplays";
import bookServices from "../services/bookServices";

const Home = () => {
  const [review, setReview] = useState();
  useEffect(() => {
    bookServices.getAllReviews().then(onGetAllSuccess).catch(onGetAllErr);
  }, []);

  const onGetAllSuccess = (response) => {
    console.log(response);
    setReview(response.data.items[0]);
  };

  const onGetAllErr = (err) => {
    console.error(err);
  };
  return (
    <>
      <Container fluid className="m-6 p-4">
        <Row>
          <Col bg="dark">
            <BookDisplay reviewInfo={review} />
          </Col>{" "}
          <Col>
            <BookDisplay reviewInfo={review} />
          </Col>{" "}
          <Col>
            <BookDisplay reviewInfo={review} />
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
