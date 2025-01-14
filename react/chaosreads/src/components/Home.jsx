import React, { useState, useEffect } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import BookDisplay from "./books/BookDisplays";
import bookServices from "../services/bookServices";

const Home = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    bookServices.getAllReviews().then(onGetAllSuccess).catch(onGetAllErr);
  }, []);

  const onGetAllSuccess = (response) => {
    console.log(response);
    setReview(response.data.items);
  };

  const onGetAllErr = (err) => {
    console.error(err);
  };

  const MapReviews = (review) => {
    return (
      <Col key={`review_${review.id}`} bg="dark">
        <BookDisplay reviewInfo={review} />
      </Col>
    );
  };
  return (
    <>
      <Container fluid className="m-6 p-4 bg-light">
        <Row md="8" lg="12">
          {reviews.map(MapReviews)}
        </Row>
      </Container>
      <Container className="m-4 p-2">
        <Row>
          <Card>
            <Card.Body>
              <Card.Text>Updated blurb.</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Home;
