import axios from "axios";

// Set the base URL from environment variables
const BASE_URL = `https://api.bam.fan/account/v1`;

console.log(BASE_URL, '===BASE_URLBASE_URL');

// Create an Axios instance
const Axios = axios.create({
    baseURL: BASE_URL,
});

// // Request Interceptor to add Authorization token
// Axios.interceptors.request.use(
    // (config) => {
    //     const token = localStorage.getItem("token"); // Retrieve token from localStorage or wherever it's stored
    //     if (token) {
    //         config.headers['Authorization'] = `Bearer ${token}`;
    //     }
    //     return config;
    // },
    // (error) => {
    //     return Promise.reject(error);
    // }
// );

// Response Interceptor for Error Handling
Axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            // window.localStorage.removeItem("persist:root");
            // window.localStorage.removeItem("user");
            // window.localStorage.removeItem("token"); // Clear token
            // window.location.href = "/"; // Redirect to login or home page
        } else {
            console.log(error.response, "error.response");
        }

        return Promise.reject(error);
    }
);

export default Axios;
