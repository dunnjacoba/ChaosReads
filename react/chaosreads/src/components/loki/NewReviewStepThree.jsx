import React from "react";
import { Form, Card, Col, Row } from "react-bootstrap";

const StepThree = (props) => {
  const { onBack, backLabel, nextLabel, onNext } = props;

  return (
    <Col>
      <Row>
        <Card className="m-4 p-2">
          <Form className="m-4 p-4">
            <Form.Group className="mb-3" controlId="coverImage">
              <Form.Label>Cover Image</Form.Label>
              <Form.Control type="file" placeholder="Cover Image" />
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
