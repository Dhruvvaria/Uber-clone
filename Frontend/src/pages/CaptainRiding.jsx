import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FinishRide from "../components/FinishRide";

export default function CaptainRiding() {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  const location = useLocation();
  const rideData = location.state?.ride;

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <div>
      <div className="h-screen relative">
        <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
          <img
            className="w-16"
            src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png"
            alt=""
          />
          <Link
            to="/captain-home"
            className="bg-white h-10 w-12 flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className="h-4/5">
          {/* image for temp. use */}
          <img
            className="h-full w-full object-cover"
            src="https://images.squarespace-cdn.com/content/v1/5a05f520f6576e6135323430/1570233092180-KY4SR5HLAZ42H8UF73IF/v3.png"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            setFinishRidePanel(true);
          }}
          className="h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative">
          <h5 className="p-1 text-center w-[90%] absolute top-0">
            <i className="ri-arrow-up-wide-line text-2xl text-gray-500"></i>
          </h5>
          <h4 className="text-lg font-semibold">4 km away</h4>
          <button className="bg-[#10b461] text-center font-semibold text-white p-3 px-10 rounded-lg">
            Complete Ride{" "}
          </button>
        </div>
        <div
          ref={finishRidePanelRef}
          className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full">
          <FinishRide ride={rideData} setFinishRidePanel={setFinishRidePanel} />
        </div>
      </div>
    </div>
  );
}
