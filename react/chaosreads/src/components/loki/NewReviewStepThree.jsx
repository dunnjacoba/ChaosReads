import React from "react";
import { Form, Card, Col, Row } from "react-bootstrap";

const StepThree = (props) => {
  const { onBack, backLabel, nextLabel, onNext } = props;

  return (
    <Col>
      <Row>
        <Card className="m-4 p-2">
          <Form className="m-4 p-4">
            <Form.Group className="mb-3" controlId="bookTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="authorName">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Author Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="authorName">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Author Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="authorName">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Author Name" />
            </Form.Group>
            <div className="button-group pt-3 row">
              <div className="col-sm-1">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onBack}
                >
                  {backLabel}
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={onNext}
                >
                  {nextLabel}
                </button>
              </div>
            </div>
          </Form>
        </Card>
      </Row>
    </Col>
  );
};

export default StepThree;
