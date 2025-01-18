import React from "react";

export default function LocationSearchPanel(props) {
  const locations = [
    "Mumbai Central Station, Mumbai, Maharashtra",
    "Bandra-Kurla Complex, Mumbai, Maharashtra",
    "Juhu Beach, Mumbai, Maharashtra",
    "Colaba Causeway, Mumbai, Maharashtra",
    "Powai Lake, Mumbai, Maharashtra",
  ];

  return (
    <div>
      <h3 className="font-xl text-semibold mb-3">Choose Your Location</h3>
      {locations.map(function (e, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanel(false);
            }}
            className="flex items-center justify-start gap-4 my-3 border-2 p-2 rounded-xl  active:border-black">
            <h2 className="bg-[#eee] p-3 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill text-2xl"></i>
            </h2>
            <h4 className=" font-medium">{e}</h4>
          </div>
        );
      })}
    </div>
  );
}
