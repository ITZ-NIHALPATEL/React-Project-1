import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

export const UserContext = createContext(null);

const DataWrapper = (props) => {
  const [toggler, settoggler] = useState(true);
  const [users, setUsers] = useState([]);
  const [theme, setTheme] = useState("light");
  const { register, handleSubmit, reset } = useForm();

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

  return (
    <UserContext.Provider
      value={{
        toggler,
        settoggler,
        users,
        setUsers,
        theme,
        setTheme,
        register,
        handleSubmit,
        reset,
        submithanlder,
        onSubmit,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default DataWrapper;
