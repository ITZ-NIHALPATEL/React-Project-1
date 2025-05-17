import React, { useContext, useEffect } from "react";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Users from "./Components/Users";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../Context/DataWrapper";

const App = () => {
  const { toggler, users, setUsers, theme, setTheme } =
    useContext(UserContext);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) setUsers(storedUsers);

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main className="min-h-screen">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 gap-8">
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 bg-gray-800 cursor-pointer text-white py-2 px-4 rounded-full text-sm md:text-lg"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        <div className="flex-1 bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
          {toggler ? <SignUp /> : <SignIn />}
        </div>

        <Users />
      </div>
    </main>
  );
};

export default App;
