import React from "react";
import Rating from "react-rating";
import { TbStar } from "react-icons/tb";
import { FaPepperHot } from "react-icons/fa";
import { Card } from "react-bootstrap";

const BookDisplay = () => {
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
        src="https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg"
        alt="Book cover of Sin Eater"
        className="mt-2"
        style={{ width: "17rem", height: "36rem" }}
      />
      <Card.Title>Sin Eater</Card.Title>
      <Card.Text>by Megan Campisi</Card.Text>
      <Card.Body>
        This is some text{" "}
        <div>
          <Rating
            fullSymbol={<TbStar color="yellow" />}
            emptySymbol={<TbStar />}
          />
        </div>
        <div>
          <Rating
            fullSymbol={<FaPepperHot color="red" />}
            emptySymbol={<FaPepperHot color="black" />}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookDisplay;
