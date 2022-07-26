import axios from "axios";

const bookEndpoint = "https://localhost:50001/api/reviews";

const getAllReviews = () => {
  const config = {
    method: "GET",
    url: bookEndpoint,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    crossdomain: true,
  };
  return axios(config);
};

const bookServices = {
  getAllReviews,
};

export default bookServices;
