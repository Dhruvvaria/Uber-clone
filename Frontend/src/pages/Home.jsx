import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

export default function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [panel, setPanel] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedPanelRef = useRef(null);
  const panelRef = useRef(null);
  const arrowDownRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  useGSAP(
    function () {
      if (panel) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(arrowDownRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(arrowDownRef.current, {
          opacity: 0,
        });
      }
    },
    [panel]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmedRidePanel) {
        gsap.to(confirmedPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmedPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmedRidePanel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5" src="logo.png" alt="logo" />
      <div className="h-screen w-screen">
        {/* image for temp. use */}
        <img
          className="h-full w-full object-cover"
          src="https://images.squarespace-cdn.com/content/v1/5a05f520f6576e6135323430/1570233092180-KY4SR5HLAZ42H8UF73IF/v3.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={arrowDownRef}
            onClick={() => setPanel(false)}
            className="absolute opacity-0 top-6 right-6 text-2xl">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-14 w-1 top-[42%] bg-black rounded-full"></div>
            <input
              onClick={() => setPanel(true)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-5 ml-5 w-[90%]"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="add a pickup location"
            />
            <input
              onClick={() => setPanel(true)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 ml-5 w-[90%]"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel
            setPanel={setPanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full  translate-y-full">
        <VehiclePanel
          setConfirmedRidePanel={setConfirmedRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmedPanelRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full">
        <ConfirmedRide
          setConfirmedRidePanel={setConfirmedRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full">
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full">
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
}
