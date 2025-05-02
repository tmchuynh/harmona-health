import { debounce } from "@/lib/screens/debounce";
import { useEffect, useState } from "react";

/**
 * Custom hook that determines if the current screen width is considered "medium".
 *
 * This hook sets up an event listener for the window resize event and updates
 * the state to indicate whether the screen width is less than or equal to 1024 pixels.
 *
 * @returns {boolean} - A boolean value indicating if the screen width is medium (<= 1024 pixels).
 *
 * @example
 * const isLargeScreen = useLargeScreen();
 *
 * if (isLargeScreen) {
 *   // Do something for medium screens
 * }
 */
const useLargeScreen = (): boolean => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 1024);
    };

    const debouncedHandleResize = debounce(handleResize, 200);

    window.addEventListener("resize", debouncedHandleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return isLargeScreen;
};

export default useLargeScreen;
