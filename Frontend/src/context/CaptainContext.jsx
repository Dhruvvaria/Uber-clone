import { createContext, useState, useContext, useEffect } from "react";

export const CaptainDataContext = createContext();

export default function CaptainContext({ children }) {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
}

// export const useCaptainContext = () => {
//   const context = useContext(CaptainDataContext);
//   if (!context) {
//     throw new Error(
//       "useCaptainContext must be used within a CaptainContext.Provider"
//     );
//   } else {
//     console.log("Context :", context);
//   }
//   return context;
// };

// const CaptainContext = ({ children }) => {
//   const [captain, setCaptain] = useState(null);
//   const [isAvailable, setIsAvailable] = useState(false);
//   const [error, setError] = useState(null);

//   // Simplified context value
//   const value = {
//     captain,
//     setCaptain, // Direct setState function
//     isAvailable,
//     setIsAvailable,
//     error,
//     setError,
//   };

//   console.log("CaptainContext current value:", value); // Debug log

//   return (
//     <CaptainDataContext.Provider value={value}>
//       {children}
//     </CaptainDataContext.Provider>
//   );
// };
