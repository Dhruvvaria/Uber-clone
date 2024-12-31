import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [captainData, setCaptainData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({
      fullname: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(captainData);
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
          src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png"
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
            Already Captain?&nbsp;
            <Link to="/captainlogin" className="text-blue-600">
              Captain Sign in
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy </span> and{" "}
          <span className="underline">Terms of Service apply.</span>
        </p>
      </div>
    </div>
  );
}
