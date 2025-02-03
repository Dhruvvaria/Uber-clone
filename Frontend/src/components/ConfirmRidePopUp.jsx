import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ConfirmRidePopUp(props) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submitHandeler = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
      {
        params: {
          rideId: props.ride._id,
          otp: otp,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      props.setConfirmRidePopUpPanel(false);
      props.setRidePopUpPanel(false);
      navigate("/captain-riding", { state: { ride: props.ride } });
    }
  };
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">Confirm Your Ride</h3>

      <div className="flex items-center justify-between mt-4 bg-gray-300 rounded-xl p-2">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover "
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
          <h4 className="text-lg font-medium capitalize">
            {props.ride?.user.fullname.firstname}
          </h4>
        </div>
        <h5 className="text-lg font-medium">2.2 km</h5>
      </div>

      <div className="flex justify-between items-center flex-col gap-3">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-line text-lg"></i>
            <div>
              <p className="text-sm text-gray-600 ">Destination</p>
              <h3 className="text-xl font-bold">{props.ride?.destination}</h3>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-line text-lg"></i>
            <div>
              <p className="text-sm text-gray-600 ">Pickup</p>
              <h3 className="text-xl font-bold">{props.ride?.pickup}</h3>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-lg text-lg"></i>
            <div>
              <p className="text-sm text-gray-600 ">Cash Cash</p>
              <h3 className="text-xl font-bold">&#8377;{props.ride?.fare}</h3>
            </div>
          </div>
        </div>
        <div className="mt-3 w-full">
          <form onSubmit={submitHandeler}>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="number"
              placeholder="Enter OTP  "
              className="bg-[#eee] px-6 py-4 font-mono text-base rounded-lg mt-3 w-full"
            />
            <button className="mt-5 w-full bg-[#10b461] flex text-lg justify-center font-semibold text-white p-3 rounded-lg">
              Confirm
            </button>
            <button
              className="mt-1 w-full bg-red-500 text-lg font-semibold text-white p-3 rounded-lg"
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
