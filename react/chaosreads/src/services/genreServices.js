import axios from "axios";

const genreEndpoint = "https://localhost:50001/api/genres";

const getAllGenres = () => {
  const config = {
    method: "GET",
    url: genreEndpoint,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    crossdomain: true,
  };
  return axios(config);
};

const genreServices = {
  getAllGenres,
};

export default genreServices;
