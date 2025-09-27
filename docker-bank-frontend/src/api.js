import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:2020", // Spring Boot backend port
  withCredentials: false, // token-based; set true only if backend uses cookie auth
  timeout: 10000, // 10s timeout for dev
});

// Register user
export const registerUser = (userData) =>
  API.post("/auth/register", userData);

// Login user (if backend has /auth/login)
export const loginUser = (credentials) =>
  API.post("/auth/login", credentials);

// Transfer money
export const transferMoney = (transferData, config = {}) =>
  API.post("/transfer", transferData, config);

// Fetch user dashboard (example endpoint)
export const fetchDashboard = () =>
  API.get("/user/dashboard");

// Response interceptor to surface network / CORS problems in console
API.interceptors.response.use(
  (res) => res,
  (err) => {
    // Log full error for debugging
    console.error('API error:', err);
    // Re-throw so callers can handle
    return Promise.reject(err);
  }
);

// export default axios instance for default imports used across the app
export default API;
