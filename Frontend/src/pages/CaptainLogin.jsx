import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password });
    console.log(captainData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        {/* <img
          className="w-16 mb-5"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        /> */}
        <img
          className="w-16 mb-10 mt-5"
          src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png"
          alt=""
        />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-lg font-medium mb-2">What's Your E-mail</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            required
          />
          <h3 className="text-lg font-medium mb-2">Enter Password </h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
            required
          />
          <button className="bg-black mb-3 rounded text-white px-4 py-2 w-full text-lg">
            Login
          </button>
          <p className="text-center">
            Want to join as Captain?&nbsp;
            <Link to="/captainsignup" className="text-blue-600">
              Register here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="flex items-center justify-center bg-[#d5622d] mb-2 rounded text-white px-4 py-2 w-full text-lg">
          Sign in as User
        </Link>
      </div>
    </div>
  );
}
