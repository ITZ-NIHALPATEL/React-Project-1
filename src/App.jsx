import React, { useState, useEffect } from "react";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Users from "./Components/Users";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [toggler, settoggler] = useState(true);
  const [users, setUsers] = useState([]);
  const [theme, setTheme] = useState("light");
  const { register, handleSubmit, reset } = useForm();

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

  const onSubmit = (data) => {
    const isExist = users.find((user) => user.email === data.email);
    if (isExist) {
      toast.error("User Already Exists!");
    } else {
      data.id = nanoid();
      setUsers([...users, data]);
      reset();
      toast.success("User Added Successfully!");
    }
  };

  const submithanlder = (data) => {
    const isPresent = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (isPresent) {
      toast.success("Sign In Successful!");
    } else {
      toast.error("Invalid Credentials!");
    }
    reset();
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main className="min-h-screen">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 gap-8">
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-full text-sm md:text-lg"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        <div className="flex-1 bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
          {toggler ? (
            <SignUp
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              toggler={toggler}
              settoggler={settoggler}
              theme={theme}
            />
          ) : (
            <SignIn
              register={register}
              handleSubmit={handleSubmit}
              submithanlder={submithanlder}
              toggler={toggler}
              settoggler={settoggler}
              theme={theme}
            />
          )}
        </div>

        <Users users={users} setUsers={setUsers} theme={theme} />
      </div>
    </main>
  );
};

export default App;
