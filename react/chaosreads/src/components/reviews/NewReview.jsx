import React from "react";
import { useNavigate } from "react-router-dom";
import { GiSpellBook, GiBookmark, GiBurningBook } from "react-icons/gi";
import Loki from "react-loki";
import StepOne from "../loki/NewReviewStepOne";
import StepTwo from "../loki/NewReviewStepTwo";
import StepThree from "../loki/NewReviewStepThree";
import "../loki/loki.css";

const NewReview = () => {
  const starRating = (value) => {
    console.log("Star Clicked", value);
  };

  const spiceSelection = (value) => {
    console.log("Spice Selected", value);
  };

  const navigate = useNavigate();

  const finish = () => {
    console.log("Clicked finish");
    navigate("/");
  };

  const changePage = () => {
    console.log("Changed");
  };

  const mySteps = [
    {
      label: "Step 1",
      icon: <GiSpellBook className="mt-2 text-center" />,
      component: (
        <StepOne starRating={starRating} spiceSelection={spiceSelection} />
      ),
    },
    {
      label: "Step 2",
      icon: <GiBookmark className="mt-2 text-center" />,
      component: <StepTwo />,
    },
    {
      label: "Step 3",
      icon: <GiBurningBook className="mt-2 text-center" />,
      component: <StepThree />,
    },
  ];

  return (
    <div className="myWizard">
      <Loki
        steps={mySteps}
        onNext={changePage}
        onBack={changePage}
        onFinish={finish}
        noActions
      />
    </div>
  );
};

export default NewReview;
