import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnLine, setIsOnLine] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnLine(true);
    });
    window.addEventListener("offLine", () => {
      setIsOnLine(false);
    });
  }, []);
  return isOnLine;
};

export default useOnlineStatus;
