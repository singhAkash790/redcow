import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

// Create context
const AlerterContext = createContext();

// Custom hook to use AlerterContext
export const useAlerterContext = () => {
  return useContext(AlerterContext);
};

// Alerter Provider
export const AlerterProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "info",
  });

  // Show alert and auto-close after 5 seconds
  const showAlert = useCallback((message, type = "info") => {
    setAlert({ open: true, message, type });

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setAlert({ open: false, message: "", type: "info" });
    }, 5000);
  }, []);

  const closeAlert = useCallback(() => {
    setAlert({ open: false, message: "", type: "info" });
  }, []);

  return (
    <AlerterContext.Provider value={{ showAlert }}>
      {children}
      {alert.open && (
        <div className={`custom-alert ${alert.type}`} onClick={closeAlert}>
          {alert.message}
        </div>
      )}
    </AlerterContext.Provider>
  );
};
