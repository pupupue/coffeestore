import React from 'react'

function Hero({
  imgName
}) {

  const imgUrl = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + '/images/' + imgName + ")"
  };

  return (
    <div 
      className="hero"
      style={imgUrl}
    >
      <span>
        Our Story
      </span>
    </div>
  )
}

export default Hero
