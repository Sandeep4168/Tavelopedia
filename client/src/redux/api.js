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
export const getToursByUser = (id) => API.get(`/tour/userTours/${id}`)

