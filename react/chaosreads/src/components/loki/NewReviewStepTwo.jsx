import React from "react";
import { Form, Card, Col, Row } from "react-bootstrap";

const StepTwo = (props) => {
  const { onBack, backLabel, nextLabel, onNext } = props;

  return (
    <Col>
      <Row>
        <Card className="m-4 p-2">
          <Form className="m-4 p-4">
            <Form.Group className="mb-3" controlId="publishingHouse">
              <Form.Label>Publishing House Name</Form.Label>
              <Form.Control type="text" placeholder="Publishing House" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="yearPublished">
              <Form.Label>Year Published</Form.Label>
              <Form.Control type="date" placeholder="Year Published" />
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

export default StepTwo;
