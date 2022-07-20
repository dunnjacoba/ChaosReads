import React, { Suspense } from "react";
import Home from "../components/Home";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loader from "../layout/Loader";
const loading = () => <Loader />;

const DefaultLayout = () => {
  return (
    <>
      <div className="content">
        <Suspense fallback={loading()}>
          <NavBar />
        </Suspense>

        <>
          <Suspense fallback={loading()}>
            <Home />
          </Suspense>
        </>
      </div>

      <Suspense fallback={loading()}>
        <Footer />
      </Suspense>
    </>
  );
};

export default DefaultLayout;
