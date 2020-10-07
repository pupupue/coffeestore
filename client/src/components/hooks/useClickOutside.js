import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useClickOutside(ref, setToggleClass) {
  useEffect(() => {

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if(setToggleClass === false || setToggleClass === true) {

        } else {
          setToggleClass()
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setToggleClass]);
}

export default useClickOutside;