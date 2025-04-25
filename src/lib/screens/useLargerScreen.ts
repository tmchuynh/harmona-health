import { useState, useEffect } from "react";
import { debounce } from "./debounce";


/**
 * A custom React hook that determines if the screen width exceeds a certain threshold.
 * It listens to the window resize event and updates the state accordingly, with an optional debounce delay.
 *
 * @param {number} debounceDelay - The delay in milliseconds for debouncing the resize event. Default is 300ms.
 * @returns {boolean} - A boolean indicating whether the screen width is larger than the threshold.
 *
 * Usage:
    const debouncedHandleResize = useMemo(
      () => debounce(handleResize, debounceDelay),
      [debounce, debounceDelay]
  const [isLargerScreen, setIsLargerScreen] = useState<boolean>(() => window.innerWidth > 1024);
 */
const useIsLargerScreen = (
  debounceDelay: number = 300,
  threshold: number = 1024
) => {
  const [isLargerScreen, setIsLargerScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargerScreen(window.innerWidth > threshold);
    };

    const debouncedHandleResize = debounce(handleResize, debounceDelay);

    window.addEventListener("resize", debouncedHandleResize);

    handleResize();

    return () => {
    window.removeEventListener("resize", debouncedHandleResize);
  };
  }, [debounceDelay, threshold]);

  return isLargerScreen;
};

export default useIsLargerScreen;
