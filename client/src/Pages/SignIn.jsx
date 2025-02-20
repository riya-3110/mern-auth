import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sign in form submitted");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl m-auto p-5 mt-8">
      <h1 className="text-3xl text-center font-semibold">Sign In</h1>
      <form
        className="flex flex-col align-center gap-4 mt-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          className="bg-slate-100 p-4 px-6 f-2xl text-slate-800 outline-blue-300 rounded-lg"
          onChange={handleChange}
          name="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-slate-100 p-4 px-6 f-2xl text-slate-800 outline-blue-300 rounded-lg"
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-slate-100 p-4 px-6 f-2xl outline-blue-300 rounded-lg"
          onChange={handleChange}
          name="password"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-slate-700 uppercase text-white p-3 rounded-lg cursor-pointer hover:opacity-95"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <button className="bg-red-500 w-full text-white p-3 rounded-lg cursor-pointer hover:opacity-90 uppercase mt-3">
        Continue with Google
      </button>
      <p className="text-1.5xl mt-5">
        Don't have an account? &nbsp;
        <Link to="/sign-up" className="text-blue-500">
          Sign Up
        </Link>
      </p>
      <p className="text-red-500 text-[1.2rem] text-center">{error}</p>
    </div>
  );
};
