import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { FaPepperHot } from "react-icons/fa";
import { Card } from "react-bootstrap";

const BookDisplay = (props) => {
  const [reviewData, setReviewData] = useState();

  useEffect(() => {
    setReviewData(props.reviewInfo);
  }, [props.reviewInfo]);

  const navigate = useNavigate();

  const onReviewClicked = () => {
    navigate(`/review/${reviewData.id}`);
  };

  return (
    <Card
      bg="dark"
      text="light"
      onClick={onReviewClicked}
      className="shadow-lg border-2px mt-2 align-items-center"
      style={{ width: "20rem" }}
    >
      <Card.Img
        variant="top"
        src={reviewData?.bookCover}
        alt="Book cover"
        className="m-2 rounded"
        style={{ width: "18rem", height: "36rem" }}
      />
      <Card.Title className="p-2">{reviewData?.title}</Card.Title>
      <Card.Text>
        by {reviewData?.author[0].firstName} {reviewData?.author[0].lastName}
      </Card.Text>
      <Card.Body>
        {props?.reviewInfo?.briefReview}{" "}
        <div>
          <Rating
            initialRating={reviewData?.rating}
            fullSymbol={<BsFillStarFill color="yellow" />}
            emptySymbol={<BsFillStarFill color="black" />}
            readonly
          />
        </div>
        <div>
          <Rating
            initialRating={reviewData?.spice}
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
