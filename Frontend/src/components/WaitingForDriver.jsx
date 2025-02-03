import React from "react";

export default function WaitingForDriver(props) {
  return (
    <div>
      <h3
        className="text-xl font-semibold mb-5"
        onClick={() => {
          props.setWaitingForDriver(false);
        }}>
        Wait For Your Driver
        <i className="ri-arrow-down-wide-line mx-2"></i>
      </h3>

      <div className="flex items-center justify-between ">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium capitalize">
            {props.ride?.captain.fullname.firstname}
          </h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">
            {props.ride?.captain.vehicle.plate}
          </h4>
          <p className="text-sm text-gray-600">Maruti Suzuki WagonR</p>
        </div>
      </div>

      <div className="flex justify-between items-center flex-col gap-3">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-key-line"></i>
            <div>
              <p className="text-sm text-gray-600 ">Your Ride OTP</p>
              <h3 className="text-xl font-bold">{props.ride?.otp}</h3>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-line text-lg"></i>
            <div>
              <p className="text-sm text-gray-600 ">Destination</p>
              <h3 className="text-xl font-bold">{props.ride?.pickup}</h3>
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
      </div>
    </div>
  );
}
