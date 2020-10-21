import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Slide = ({img, title, titleForeign, postUrl}) => {
  const [style] = useState({
    backgroundColor: '#9d4d28',
    backgroundImage: 'url(' + process.env.PUBLIC_URL +'/images/'+ img +')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  });

  return (
    <div 
      className="intro__item intro__main"
      style={style}
    >
      <div className="wrap">
        <h3>{titleForeign}</h3>
        <h4>{title}</h4>
        <Link
          to={`/article/${postUrl}`}
          style={{marginTop: "1.5em"}}
        >
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default Slide
