import React from "react";
import Rating from "react-rating";
import { BsFillStarFill } from "react-icons/bs";
import { FaPepperHot } from "react-icons/fa";
import { Card } from "react-bootstrap";

const BookDisplay = (props) => {
  const changePage = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Card
      bg="dark"
      text="light"
      onClick={changePage}
      className="shadow-lg border-2px mt-2 align-items-center"
      style={{ width: "18rem" }}
    >
      <Card.Img
        variant="top"
        src={props?.reviewInfo?.bookCover}
        alt="Book cover"
        className="mt-2"
        style={{ width: "17rem", height: "36rem" }}
      />
      <Card.Title>{props?.reviewInfo?.title}</Card.Title>
      <Card.Text>
        by {props?.reviewInfo?.author[0].firstName}{" "}
        {props?.reviewInfo?.author[0].lastName}
      </Card.Text>
      <Card.Body>
        {props?.reviewInfo?.briefReview}{" "}
        <div>
          <Rating
            initialRating={props?.reviewInfo?.rating}
            fullSymbol={<BsFillStarFill color="yellow" />}
            emptySymbol={<BsFillStarFill color="black" />}
            readonly
          />
        </div>
        <div>
          <Rating
            initialRating={props?.reviewInfo?.spice}
            fullSymbol={<FaPepperHot color="red" />}
            emptySymbol={<FaPepperHot color="black" />}
            readonly
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookDisplay;
