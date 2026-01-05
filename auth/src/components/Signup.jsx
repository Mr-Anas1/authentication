import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
      });

      if (res.data === "exist") {
        alert("User already exist");
      } else if (res.data === "notexist") {
        navigate("/home", { state: { id: email } });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <form
          onSubmit={submit}
          className="w-[380px] py-8 px-4 flex gap-2 flex-col bg-white text-black rounded-xl"
        >
          <h1 className="text-3xl font-bold my-2 text-blue-400 text-center">
            Sign Up
          </h1>
          <input
            className="p-2 rounded-md outline-none border-1 border-blue-400 mb-4"
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="p-2 rounded-md outline-none border-1 border-blue-400 mb-4"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="p-2 rounded-md outline-none border-1 border-blue-400 mb-4"
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="w-fit px-6 py-2 rounded-xl font-semibold mx-auto cursor-pointer bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white"
          >
            Sign up
          </button>
          <p className="text-center my-2">OR</p>

          <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
