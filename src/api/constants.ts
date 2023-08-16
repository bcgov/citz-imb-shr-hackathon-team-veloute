const { API_PORT, API_URL, ENVIRONMENT } = process.env;

let backendURL = API_URL;

if (ENVIRONMENT && ENVIRONMENT === "local") {
  backendURL = `http://localhost:${API_PORT}`;
}

const Constants = {
  API_PORT: API_PORT || 5000,
  BACKEND_URL: backendURL,
};

export default Constants;
