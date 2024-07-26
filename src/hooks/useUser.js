import { useState } from "react";

export const getUserLS = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? user : null;
  } catch (_) {
    return null;
  }
};

export const useUser = () => {
  const [user, setUser] = useState(getUserLS());

  const login = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return { user, login, logout };
};
