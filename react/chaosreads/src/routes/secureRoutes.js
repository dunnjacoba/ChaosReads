import { lazy } from "react";

const NewReview = lazy(() => import("../components/reviews/NewReview"));

const reviewRoutes = [
  {
    path: "/new",
    name: "AddReview",
    exact: true,
    element: NewReview,
    roles: [],
    isAnonymous: true,
  },
];

const secureRoutes = [...reviewRoutes];

export default secureRoutes;
