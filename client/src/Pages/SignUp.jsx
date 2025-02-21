import { set } from "mongoose";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }
      setLoading(false);
      //  alert("Signup successful!");
    } catch (error) {
      console.error("Signup Error:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl m-auto p-5 mt-8">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
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
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-slate-100 p-4 px-6 f-2xl text-slate-800 outline-blue-300 rounded-lg"
          onChange={handleChange}
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-slate-100 p-4 px-6 f-2xl outline-blue-300 rounded-lg"
          onChange={handleChange}
          name="password"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-slate-700 uppercase text-white p-3 rounded-lg cursor-pointer hover:opacity-95"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <p className="text-1.5xl mt-5">
        Have an account?{" "}
        <Link to="/sign-in" className="text-blue-500">
          Sign in
        </Link>
      </p>
      <p className="text-red-500 text-[1.2rem] text-center">{error}</p>
    </div>
  );
};
