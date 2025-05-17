import React, { useContext } from "react";
import { UserContext } from "../../Context/DataWrapper";

const SignIn = () => {
  const { settoggler, toggler, submithanlder, theme, register, handleSubmit } =
    useContext(UserContext);

  return (
    <div
      className={`bg-white p-10 rounded-lg shadow-lg w-full max-w-md mx-auto ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>
      <form onSubmit={handleSubmit(submithanlder)} className="space-y-6">
        <div>
          <label className="text-sm mb-2 block" htmlFor="email">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Your Email"
            className={`w-full p-4 border rounded-lg ${
              theme === "dark"
                ? "bg-gray-700 text-white"
                : "bg-gray-100 text-black"
            } focus:ring-2 focus:ring-blue-500`}
            required
          />
        </div>
        <div>
          <label className="text-sm mb-2 block" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Your Password"
            className={`w-full p-4 border rounded-lg ${
              theme === "dark"
                ? "bg-gray-700 text-white"
                : "bg-gray-100 text-black"
            } focus:ring-2 focus:ring-blue-500`}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
        >
          Sign In
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Don't have an account?{" "}
        <button
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() => settoggler(!toggler)}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default SignIn;
