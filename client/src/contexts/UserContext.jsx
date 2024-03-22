import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
// Create the UserProvider component
export const UserProvider = ({ children }) => {
  // Define the state for user session
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  // Define functions to manage the user session
  const login = (userData) => {
    // Perform login logic here
    setUser(userData);
    saveUserToLocalStorage(userData);
  };

  const logout = () => {
    // Perform logout logic here
    setUser(null);
    removeUserFromLocalStorage();
  };

  // Function to save user data to localStorage
  const saveUserToLocalStorage = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to remove user data from localStorage
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
  };

  // Provide the user session state and functions to the children components
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
