import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/datasets/geo-boundaries-world-110m/master/countries.geojson";

const App = () => {
  const [position, setPosition] = useState({ coordinates: [0, 0] });
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch(geoUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched GeoJSON:", data); // Debugging
        setGeoData(data);
      })
      .catch((error) => console.error("Error fetching GeoJSON:", error));
  }, []);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition({ coordinates: [longitude, latitude] });
      },
      (error) => console.error("Error getting location:", error),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div>
      <ComposableMap>
        {geoData && (
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        )}
        <Marker coordinates={position.coordinates}>
          <circle r={5} fill="#F00" />
        </Marker>
      </ComposableMap>
    </div>
  );
};

const rootElement = document.getElementById("app");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

export default function LiveTracking() {
  return <App />;
}
