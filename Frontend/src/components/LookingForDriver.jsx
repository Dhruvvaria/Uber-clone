import React from "react";

export default function LookingForDriver(props) {
  return (
    <div>
      <h3
        className="text-xl font-semibold mb-5"
        onClick={() => {
          props.setVehicleFound(false);
        }}>
        Looking For A Driver
        <i className="ri-arrow-down-wide-line mx-2"></i>
      </h3>

      <div className="flex justify-between items-center flex-col gap-3">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-line text-lg"></i>
            <div>
              <p className="text-sm text-gray-600 ">Your Destination</p>
              <h3 className="text-xl font-bold">{props.destination}</h3>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-line text-lg"></i>
            <div>
              <p className="text-sm text-gray-600 ">Your Pickup Location</p>
              <h3 className="text-xl font-bold">{props.pickup}</h3>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-lg text-lg"></i>
            <div>
              <p className="text-sm text-gray-600 capitalize">
                {props.vehicleType}
              </p>
              <h3 className="text-xl font-bold ">
                &#8377;{props.fare[props.vehicleType]}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
