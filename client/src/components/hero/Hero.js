import React from 'react'

function Hero({
  imgName, text
}) {

  const imgUrl = {
    backgroundColor: '#9d4d28',
    backgroundImage: "url(" + process.env.PUBLIC_URL + '/images/' + imgName + ")"
  };

  return (
    <div 
      className="hero"
      style={imgUrl}
    >
      <span>
        {text}
      </span>
    </div>
  )
}

export default Hero
