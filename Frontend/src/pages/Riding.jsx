import React, { useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";

export default function Riding() {
  const location = useLocation();
  const { ride } = location.state || {};
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on("ride-ended", () => {
    navigate("/home");
  });

  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed top-2 right-2 bg-white h-10 w-12 flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-9-line"></i>
      </Link>
      <div className="h-1/2">
        {/* image for temp. use */}
        <img
          className="h-full w-full object-cover"
          src="https://images.squarespace-cdn.com/content/v1/5a05f520f6576e6135323430/1570233092180-KY4SR5HLAZ42H8UF73IF/v3.png"
          alt=""
        />
      </div>
      <div className="h-1/2 p-3">
        <div className="flex items-center justify-between ">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">
              {ride?.captain.fullname.firstname}
            </h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">
              {ride?.captain.vehicle.plate}
            </h4>
            <p className="text-sm text-gray-600">Maruti Suzuki WagonR</p>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col gap-3">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-map-pin-line text-lg"></i>
              <div>
                <p className="text-xs text-gray-600 ">Destination</p>
                <h3 className="text-lg font-semibold">{ride?.destination}</h3>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line text-lg text-lg"></i>
              <div>
                <p className="text-xs text-gray-600 ">Cash Cash</p>
                <h3 className="text-lg font-semibold">&#8377;{ride?.fare}</h3>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-5 w-full bg-[#10b461] font-semibold text-white p-2 rounded-lg">
          Make A Payment
        </button>
      </div>
    </div>
  );
}
