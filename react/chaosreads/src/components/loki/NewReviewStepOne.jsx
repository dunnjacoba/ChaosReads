import React from "react";
import Rating from "react-rating";
import { BsFillStarFill } from "react-icons/bs";
import { FaPepperHot } from "react-icons/fa";
import { Form, Card, Col, Row, FormGroup } from "react-bootstrap";

const StepOne = (props) => {
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
            <FormGroup className="mb-3" controlId="genre">
              <Form.Label>Genre</Form.Label>
              <Form.Select>
                <option value={0}>Genre</option>
                <option value={1}>Fantasy</option>
                <option value={2}>Romance</option>
                <option value={3}>Horror</option>
              </Form.Select>
            </FormGroup>
            <Form.Group className="mb-3" controlId="briefReview">
              <Form.Label>Short Review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fullReview">
              <Form.Label>Complete Review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="spice">
              <Form.Check type="checkbox" label="Spicy?" />
            </Form.Group>
            <div>
              <Rating
                onClick={props.starRating}
                fullSymbol={<BsFillStarFill color="yellow" />}
                emptySymbol={<BsFillStarFill color="black" />}
              />
            </div>
            <div>
              <Rating
                onClick={props.spiceSelection}
                fullSymbol={<FaPepperHot color="red" />}
                emptySymbol={<FaPepperHot color="black" />}
              />
            </div>
          </Form>
        </Card>
      </Row>
    </Col>
  );
};

export default StepOne;
