import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

export default function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
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
          <div className="flex justify-between gap-2 mb-3">
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
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
            required
          />
          <h3 className="text-base font-medium mb-2">Enter Password </h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="Password"
            required
          />
          <h3 className="text-base font-medium mb-2">Vehicle Details</h3>
          <div className="flex justify-between gap-2 mb-3">
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              placeholder="Vehicle Color"
              required
            />
            <input
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              placeholder="Vehicle Plate Number"
              required
            />
          </div>
          <div className="flex justify-between gap-2 mb-3">
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base"
              required>
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
              type="number"
              placeholder="Vehicle Capacity"
              required
            />
          </div>
          <button className="bg-black mb-3 rounded text-white px-4 py-2 w-full text-base">
            Create Captain Account
          </button>
          <p className="text-center">
            Already Captain?&nbsp;
            <Link to="/captain-login" className="text-blue-600">
              Captain Sign in
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] mt-10 mb-3 leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy </span> and{" "}
          <span className="underline">Terms of Service apply.</span>
        </p>
      </div>
    </div>
  );
}
