import axios from "axios";

const rawEnv = (import.meta as any).env;
const envApiKey = rawEnv?.VITE_RAWG_API_KEY;
const fallbackKey = "c7b18323a47d40c394ea5b019646b1f5";
const apiKey = envApiKey || fallbackKey;

if (!envApiKey) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_RAWG_API_KEY is not defined — using fallback key which may be invalid. Add VITE_RAWG_API_KEY to a .env file at the project root and restart Vite."
  );
}

const client = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

// Log request/response errors to help debug 401/Network issues
client.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line no-console
    console.error("RAWG API request failed:", error?.response?.status, error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default client;
