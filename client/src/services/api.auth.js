import { api } from "./api";

export const registerUser = async ({
  username,
  email,
  password,
  confirmPassword,
}) => {
  return await api.post("/auth/register", {
    username,
    email,
    password,
    confirmPassword,
  });
};

export const loginUser = async ({ email, password }) => {
  return await api.post(
    "/auth/login",
    { email, password },
    {
      withCredentials: true,
    }
  );
};

export const authStatus = async () => {
  return await api.get("/auth/status", {
    withCredentials: true,
  });
};

export const logoutUser = async () => {
  return await api.post(
    "/auth/logout",
    {},
    {
      withCredentials: true,
    }
  );
};
