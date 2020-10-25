import React, { useEffect, useState } from 'react'

function ScrollUp() {
  const style = { enableBackground: "new 0 0 500 500" };
  const [show, setShow] = useState(false)
  const scrollUp = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    const onScroll = e => {
      if (window.pageYOffset > 400) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
     className={show ? "scroll-up" : "scroll-up hidden"}
     onClick={() => scrollUp()}
    >
      <svg className="scroll-up__icon" x="0px" y="0px"
          viewBox="0 0 512 512" style={style}>
        <path d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0
      c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267
      c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407
      s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062
      C438.533,179.485,428.732,142.795,409.133,109.203z M361.74,259.517l-29.123,29.129c-3.621,3.614-7.901,5.424-12.847,5.424
      c-4.948,0-9.236-1.81-12.847-5.424l-87.654-87.653l-87.646,87.653c-3.616,3.614-7.898,5.424-12.847,5.424
      c-4.95,0-9.233-1.81-12.85-5.424l-29.12-29.129c-3.617-3.607-5.426-7.898-5.426-12.847c0-4.942,1.809-9.227,5.426-12.848
      l129.62-129.616c3.617-3.617,7.898-5.424,12.847-5.424s9.238,1.807,12.846,5.424L361.74,233.822
      c3.613,3.621,5.424,7.905,5.424,12.848C367.164,251.618,365.357,255.909,361.74,259.517z"/>
      </svg>
    </div>
  )
}

export default ScrollUp
