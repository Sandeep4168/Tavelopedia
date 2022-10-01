import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return req;
  });

export const signin = (formData) => API.post("/users/signin",formData)
export const signup = (formData) => API.post("/users/signup",formData)


export const createTour = (tourData) => API.post("/tour",tourData)
export const getTours = () => API.get("/tour")
export const getTour = (id) => API.get(`/tour/${id}`)
<<<<<<< HEAD
export const deleteTour = (id) => API.delete(`/tour/${id}`)
export const updateTour = (updatedTourData, id) => API.patch(`/tour/${id}`, updatedTourData);
=======
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
export const getToursByUser = (id) => API.get(`/tour/userTours/${id}`)

