import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

export default function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-16 mb-10 mt-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-base font-medium mb-2">What's Your Name</h3>
          <div className="flex justify-between gap-2 mb-6">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's Your E-mail</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
            required
          />
          <h3 className="text-base font-medium mb-2">Enter Password </h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="Password"
            required
          />
          <button className="bg-black mb-3 rounded text-white px-4 py-2 w-full text-base">
            Create Account
          </button>
          <p className="text-center">
            Already User?&nbsp;
            <Link to="/login" className="text-blue-600">
              Sign in
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
}
