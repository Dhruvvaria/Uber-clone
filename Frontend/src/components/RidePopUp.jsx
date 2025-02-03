import React from "react";

export default function RidePopUp(props) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">A New Ride For You</h3>

      <div className="flex items-center justify-between mt-4 bg-gray-300 rounded-xl p-2">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover "
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
          <h4 className="text-lg font-medium">
            {props.ride?.user.fullname.firstname +
              " " +
              props.ride?.user.fullname.lastname}
          </h4>
        </div>
        <h5 className="text-lg font-medium">2.2 km</h5>
      </div>

      <div className="flex justify-between items-center flex-col gap-3">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-line text-lg"></i>
            <div>
              <p className="text-sm text-gray-600 ">PickUp Point</p>
              <h3 className="text-xl font-bold">{props.ride?.pickup}</h3>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-line text-lg"></i>
            <div>
              <p className="text-sm text-gray-600 ">Drop Point</p>
              <h3 className="text-xl font-bold">{props.ride?.destination}</h3>
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
        <div className="flex mt-5 items-center justify-between w-full">
          <button
            className="bg-gray-500 font-semibold text-white p-3 px-10 rounded-lg"
            onClick={() => {
              props.setRidePopUpPanel(false);
            }}>
            <i className="ri-close-line"></i> Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopUpPanel(true);
              props.confirmRide();
            }}
            className="bg-[#10b461] font-semibold text-white p-3 px-10 rounded-lg">
            <i className="ri-check-line"></i> Accept
          </button>
        </div>
      </div>
    </div>
  );
}
