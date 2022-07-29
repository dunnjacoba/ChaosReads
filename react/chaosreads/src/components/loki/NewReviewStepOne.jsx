import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import genreServices from "../../services/genreServices";
import { BsFillStarFill } from "react-icons/bs";
import { FaPepperHot } from "react-icons/fa";
import { Form, Card, Col, Row, FormGroup } from "react-bootstrap";

const StepOne = (props) => {
  const { onBack, backLabel, nextLabel, onNext } = props;

  const [spice, setSpice] = useState(false);

  const [state, setState] = useState({ genres: [] });

  useEffect(() => {
    genreServices
      .getAllGenres()
      .then(onGetAllGenresSuccess)
      .catch(onGetAllGenresErr);
  }, []);

  const MapGenreOption = (genre) => {
    return (
      <option key={`genre_${genre.id}`} value={genre.id}>
        {genre.name}
      </option>
    );
  };

  const onGetAllGenresSuccess = (response) => {
    let genres = response.data.items;
    setState((prevState) => {
      let newState = { ...prevState };
      newState.genres = genres;
      return newState;
    });
  };

  const onGetAllGenresErr = (err) => {
    console.error(err);
  };

  const isSpicy = (e) => {
    setSpice(e.target.checked);
  };

  return (
    <Row>
      <Col>
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
              <Form.Select>{state.genres.map(MapGenreOption)}</Form.Select>
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
              <Form.Check
                type="checkbox"
                onChange={(e) => isSpicy(e)}
                label="Spicy?"
              />
            </Form.Group>
            <div>
              <div>
                <Rating
                  onClick={props.starRating}
                  fullSymbol={<BsFillStarFill color="yellow" />}
                  emptySymbol={<BsFillStarFill color="black" />}
                />
              </div>
              {spice && true && (
                <div>
                  <Rating
                    onClick={props.spiceSelection}
                    fullSymbol={<FaPepperHot color="red" />}
                    emptySymbol={<FaPepperHot color="black" />}
                  />
                </div>
              )}
            </div>

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
      </Col>{" "}
    </Row>
  );
};

export default StepOne;
