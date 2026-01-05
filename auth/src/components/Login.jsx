import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/", {
        email,
        password,
      });

      if (res.data === "success") {
        navigate("/home", { state: { id: email } });
      } else if (res.data === "notexist") {
        alert("User have not sign up");
      } else if (res.data === "wrongpassword") {
        alert("Wrong password");
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
            Login
          </h1>

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
            Login
          </button>

          <p className="text-center my-2">OR</p>

          <Link to="/signup">Signup</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
