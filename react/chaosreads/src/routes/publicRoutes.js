import { lazy } from "react";

const Home = lazy(() => import("../components/Home"));

const landingRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    element: Home,
    roles: [],
    isAnonymous: true,
  },
];

const allRoutes = [...landingRoutes];

export default allRoutes;
