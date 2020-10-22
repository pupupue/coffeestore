import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useClickOutside(refMenu, refButton, toggleClass, setToggleClass) {
  useEffect(() => {

    function handleClickOutside(event) {
      if (refMenu.current && !refMenu.current.contains(event.target)
      && refButton.current && !refButton.current.contains(event.target)) {
        if(toggleClass === false) {
          
        } else {
          setToggleClass()
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refButton, refMenu, toggleClass, setToggleClass]);
}

export default useClickOutside;