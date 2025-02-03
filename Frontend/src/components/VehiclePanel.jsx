import React from "react";

export default function VehiclePanel(props) {
  return (
    <div>
      <h3
        className="text-xl font-semibold mb-5"
        onClick={() => {
          props.setVehiclePanel(false);
        }}>
        Choose A Vehicle
        <i className="ri-arrow-down-wide-line mx-2"></i>
      </h3>
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
          props.selectVehicle("car");
          console.log("Vehicle selected: car"); // Debugging
        }}
        className="flex items-center border-2 active:border-black rounded-xl justify-between w-full p-3 mb-3 gap-2">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt=""
        />
        <div className=" w-full">
          <h4 className=" text-medium font-semibold">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-xs font-grey-400 font-normal">
            Affordable, compacts rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">
          &#8377;{props.fare?.car || "Calculating..."}
        </h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
          props.selectVehicle("motorcycle");
        }}
        className="flex items-center border-2 active:border-black rounded-xl justify-between w-full p-3 mb-3 gap-2">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" w-full">
          <h4 className=" text-medium font-semibold">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="text-sm">3 mins away</h5>
          <p className="text-xs font-grey-400 font-normal">
            Affordable Motorcycle Ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">
          &#8377;{props.fare.motorcycle || "Calculating..."}
        </h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
          props.selectVehicle("auto");
        }}
        className="flex items-center border-2 active:border-black rounded-xl justify-between w-full p-3 mb-3 gap-2">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className=" w-full">
          <h4 className=" text-medium font-semibold">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-xs font-grey-400 font-normal"></p>
        </div>
        <h2 className="text-lg font-semibold">
          &#8377;{props.fare.auto || "Calculating..."}
        </h2>
      </div>
    </div>
  );
}
