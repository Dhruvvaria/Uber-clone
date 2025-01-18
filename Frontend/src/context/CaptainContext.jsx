import { createContext, useState, useContext } from "react";

export const CaptainDataContext = createContext();

// export const useCaptainContext = () => {
//   const context = useContext(CaptainDataContext);
//   if (!context) {
//     throw new Error("useCaptainContext must be used within a CaptainProvider");
//   }
//   return context;
// };

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [error, setError] = useState(null);

  const updateCaptain = (status) => {
    setIsAvailable(status);
  };

  const value = {
    captain,
    setCaptain,
    isAvailable,
    setIsAvailable,
    error,
    setError,
    updateCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
