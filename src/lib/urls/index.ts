const BASE_URL = "http://localhost:5000";

export const url = {
  auth: {
    login: `${BASE_URL}/auth/login`,
    signup: `${BASE_URL}/auth/signup`,
    logout: `${BASE_URL}/auth/logout`,
  },
  profile: {
    get: `${BASE_URL}/profile`,
  },
};
