import React from "react";

export default function LocationSearchPanel({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion.description);
    } else if (activeField === "destination") {
      setDestination(suggestion.description);
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
  };

  return (
    <div>
      <h3 className="font-xl text-semibold mb-3 mt-5">Choose Your Location</h3>

      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => {
            handleSuggestionClick(elem);
          }}
          className="flex items-center justify-start gap-4 my-3 border-2 p-2 rounded-xl  active:border-black">
          <h2 className="bg-[#eee] p-3 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill text-2xl"></i>
          </h2>
          <h4 className="font-medium">{elem.description}</h4>
        </div>
      ))}
    </div>
  );
}
