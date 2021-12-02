// import cities from './cities.json';
// import citizens from './citizens.json';
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getCities = async () => {
  try {
    const response = await instance.get("/cities");
    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getCitizens = async () => {
  try {
    const response = await instance.get("/citizens");
    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
