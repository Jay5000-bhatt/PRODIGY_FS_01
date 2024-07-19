import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { name, email, password },
        config
      );
      console.log("Response data:", response.data);

      navigate("/login");
    } catch (error) {
      console.error("Error response:", error.response);
      if (error.response && error.response.data) {
        console.error("Error message:", error.response.data.message);
      } else {
        console.error("Unknown error occurred:", error.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2 className="title">Sign Up</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn solid">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
