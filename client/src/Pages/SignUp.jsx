import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="max-w-lg m-auto p-5 mt-8">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
      <form className="flex flex-col align-center gap-4 mt-6">
        <input
          type="text"
          placeholder="Username"
          className="bg-slate-100 p-3 f-2xl text-slate-800 outline-none rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-slate-100 p-3 f-2xl text-slate-800 outline-none rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-slate-100 p-3 f-2xl outline-none rounded-lg"
        />
        <button
          type="submit"
          className="bg-slate-700 uppercase text-white p-3 rounded-lg cursor-pointer hover:opacity-95"
        >
          Sign Up
        </button>
      </form>
      <p className="text-1.5xl mt-5">
        Have an account? <Link to="/sign-in" className="text-blue-500">Sign in</Link>
      </p>
    </div>
  );
};
