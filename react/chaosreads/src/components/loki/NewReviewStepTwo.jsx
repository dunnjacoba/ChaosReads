import React from "react";
import { Form, Card, Col, Row } from "react-bootstrap";

const StepTwo = () => {
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
          </Form>
        </Card>
      </Row>
    </Col>
  );
};

export default StepTwo;
