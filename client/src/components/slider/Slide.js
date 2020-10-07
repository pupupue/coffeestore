import React, { useState } from 'react'

const Slide = ({img, title, titleForeign, postUrl}) => {
  const [style] = useState({
    backgroundColor: '#9d4d28',
    backgroundImage: 'url(' + process.env.PUBLIC_URL +'/images/'+ img +')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  });

  const onClick= e => {
    e.preventDefault();
    alert(postUrl);
  };

  return (
    <div 
      className="intro__item intro__main"
      style={style}
    >
      <div className="wrap">
        <h3>{titleForeign}</h3>
        <h4>{title}</h4>
        <p
          onClick={onClick}
        >
          READ MORE
        </p>
      </div>
    </div>
  )
}

export default Slide
