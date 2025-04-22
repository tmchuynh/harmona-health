import { useState, useEffect } from "react";
import { debounce } from "./debounce";

/**
 * Custom hook to determine if the screen size is larger (between 1025px and 1440px).
 */
const useLargerScreen = () => {
  const [isLargerScreen, setIsLargerScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargerScreen(window.innerWidth > 1024 && window.innerWidth <= 1440);
    };

    const debouncedHandleResize = debounce(handleResize, 300);

    window.addEventListener("resize", debouncedHandleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return isLargerScreen;
};

export default useLargerScreen;
