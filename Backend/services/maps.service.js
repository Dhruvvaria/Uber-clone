// const axios = require("axios");

// module.exports.getAddressCordinate = async (address) => {
//   const apiKey = process.env.GOOGLE_MAPS_API;
//   const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(
//     address
//   )}&key=${apiKey}`;

//   try {
//     const response = await axios.get(url);
//     if (response.data.status === "OK") {
//       const location = response.data.results[0].geometry.location;
//       return {
//         lat: location.lat,
//         lng: location.lng,
//       };
//     } else {
//       throw new Error("Unable to find the address");
//     }
//   } catch (error) {
//     throw new Error(`Error fetching coordinates: ${error.message}`);
//   }
// };

const axios = require("axios");
const Captain = require("../models/captain.model");

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API; // Ensure your API key is set in the environment variables
  const baseURL = "https://maps.gomaps.pro/maps/api/geocode/json";

  try {
    // Construct the API URL with encoded address and API key
    const url = `${baseURL}?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    // Send a GET request to the API
    const response = await axios.get(url);

    // Check if the API response status is "OK"
    if (response.data.status === "OK" && response.data.results.length > 0) {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error(
        "Unable to find the coordinates for the provided address."
      );
    }
  } catch (error) {
    // Log and throw an error for external handling
    console.error("Error fetching coordinates:", error.message);
    throw new Error(`Error fetching coordinates: ${error.message}`);
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and Destination are required!!");
  }

  const apiKey = process.env.GOOGLE_MAPS_API; // Ensure your API key is set in the environment variables
  const baseURL = "https://maps.gomaps.pro/maps/api/distancematrix/json";

  try {
    const url = `${baseURL}?origins=${encodeURIComponent(
      origin
    )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    const response = await axios.get(url);

    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }

      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to fetch distance and time.");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports.getAutoCompleteSuggetions = async (input) => {
  if (!input) {
    throw new Error("query is required!");
  }

  const apiKey = process.env.GOOGLE_MAPS_API; // Ensure your API key is set in the environment variables
  const baseURL = "https://maps.gomaps.pro/maps/api/place/autocomplete/json";

  try {
    const url = `${baseURL}?input=${encodeURIComponent(input)}&key=${apiKey}`;

    const response = await axios.get(url);

    if (response.data.status === "OK") {
      return response.data.predictions;
    } else {
      throw new Error("Unable to fetch suggetions");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
  try {
    const captains = await Captain.find({
      location: {
        $geoWithin: {
          $centerSphere: [[ltd, lng], radius / 6371],
        },
      },
    });
    return captains;
  } catch (err) {
    console.log("Error fething captain :", err);
  }
};
