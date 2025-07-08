import axios, { AxiosInstance } from "axios";
import CustomError from "../types/customError";

const axiosClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000, // 10 seconds
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor if needed (e.g., for auth token)
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Optional: Add a response interceptor
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("response", error.response.data)
        // Handle common errors globally (e.g., 401, 403)
        if (error.response?.status === 401) {
            console.warn("Unauthorized. Redirecting to login...");
            // Optionally redirect or logout
            if (location.pathname !== '/') {
                location.href = '/';
            }

            return Promise.reject(new CustomError('Unauthorized'));;
        }
        if (error?.response?.data?.message) {
            return Promise.reject(new CustomError(error.response.data.message));
        } else {
            return Promise.reject(new Error(error?.response?.data?.message ?? error.message));
        }
    }
);

export default axiosClient;
