import React, { useState, useRef, useContext, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import axios from "axios";
import { SocketContext } from "../context/SocketContext";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";

export default function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [panel, setPanel] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);
  const [ride, setRide] = useState(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedPanelRef = useRef(null);
  const panelRef = useRef(null);
  const arrowDownRef = useRef(null);
  const findBtn = useRef(null);

  const navigate = useNavigate();

  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserDataContext);

  useEffect(() => {
    socket.emit("join", { userType: "user", userId: user._id });
  }, [user]);

  socket.on("ride-confirmed", (ride) => {
    setVehicleFound(false);
    setWaitingForDriver(true);
    setRide(ride);
  });

  socket.on("ride-started", (ride) => {
    setWaitingForDriver(false);
    navigate("/riding", { state: { ride } });
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggetions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPickupSuggestions(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggetions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch {
      // handle error
    }
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
        gsap.to(findBtn.current, {
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
        gsap.to(findBtn.current, {
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

  async function findTrip() {
    setVehiclePanel(true);
    setPanel(false);

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
      {
        params: { pickup, destination },

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setFare(response.data);
  }

  async function createRide() {
    if (!vehicleType) {
      console.error("Vehicle Type is missing!");
      return;
    }
    console.log("Selected Vehicle Type in createRide:", vehicleType);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/rides/create`,
        {
          pickup,
          destination,
          vehicleType,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Ride Created :", response.data);
    } catch (err) {
      console.error("Error creating ride:", err.response?.data || err.message);
    }
  }

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
              onClick={() => {
                setPanel(true);
                setActiveField("pickup");
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-5 ml-5 w-[90%]"
              type="text"
              value={pickup}
              onChange={handlePickupChange}
              placeholder="add a pickup location"
            />
            <input
              onClick={() => {
                setPanel(true);
                setActiveField("destination");
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 mb-5 ml-5 w-[90%]"
              type="text"
              value={destination}
              onChange={handleDestinationChange}
              placeholder="enter your destination"
            />

            <button
              ref={findBtn}
              onClick={findTrip}
              className="bg-black text-white px-4 py-2 rounded-lg my-5 w-full opacity-0">
              Find Trip
            </button>
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0 ">
          <LocationSearchPanel
            suggestions={
              activeField === "pickup"
                ? pickupSuggestions
                : destinationSuggestions
            }
            setPanel={setPanel}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 bg-white px-3  w-full  translate-y-full">
        <VehiclePanel
          selectVehicle={setVehicleType}
          fare={fare}
          setConfirmedRidePanel={setConfirmedRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmedPanelRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full">
        <ConfirmedRide
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setConfirmedRidePanel={setConfirmedRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full">
        <LookingForDriver
          createRide={createRide}
          setVehicleFound={setVehicleFound}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
        />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 bg-white px-3 py-6 w-full translate-y-full">
        <WaitingForDriver
          ride={ride}
          setWaitingForDriver={setWaitingForDriver}
          setVehicleFound={vehicleFound}
          waitingForDriver={waitingForDriver}
        />
      </div>
    </div>
  );
}
