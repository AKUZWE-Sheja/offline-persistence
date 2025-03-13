import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

// Custom hook to track network status
export const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState(true); // Default to online

  useEffect(() => {
    // Fetch initial network status
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
      console.log("Initial connection type:", state.type);
      console.log("Is connected?", state.isConnected);
    });

    // Listen for network changes
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      console.log("Updated connection type:", state.type);
      console.log("Is connected?", state.isConnected);
    });

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  return isConnected;
};
