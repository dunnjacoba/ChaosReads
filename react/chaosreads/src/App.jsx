import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewReview from "./components/reviews/NewReview";
import DefaultLayout from "./layout/Default";
import Loader from "./layout/Loader";

const loading = () => {
  return <Loader />;
};

export default function App() {
  return (
    <Suspense loading={loading}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}></Route>
          <Route path="/new" element={<NewReview />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
