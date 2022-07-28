import React from "react";
import { GiSpellBook } from "react-icons/gi";
import Loki from "react-loki";
import StepOne from "../loki/NewReviewStepOne";

const NewReview = () => {
  const mySteps = [
    {
      label: "Step 1",
      icon: <GiSpellBook />,
      component: <StepOne />,
    },
  ];

  const finish = () => {
    console.log("Clicked finish");
  };
  return (
    <div className="myWizard">
      <Loki steps={mySteps} onFinish={finish} />
    </div>
  );
};

export default NewReview;
