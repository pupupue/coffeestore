import React from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery';

function Hero({
  imgName, text
}) {
  const imgPath = process.env.PUBLIC_URL +'/images/';
  const isSmall = useMediaQuery('(min-width: 352px)');
  const isMedium = useMediaQuery('(min-width: 768px)');
  const isLarge = useMediaQuery('(min-width: 1200px)');
  let style;

  if(isLarge) {
    style = {
      backgroundColor: '#9d4d28',
      backgroundImage: 'url(' + imgPath + imgName + '-large.png)',
    };
  } else if (isMedium) {
    style = {
      backgroundColor: '#9d4d28',
      backgroundImage: 'url(' + imgPath + imgName + '-medium.png)',
    };
  } else if (isSmall) {
    style = {
      backgroundColor: '#9d4d28',
      backgroundImage: 'url(' + imgPath + imgName + '-small.png)',
    };
  }
  return (
    <div 
      className="hero"
      style={style}
    >
      <span>
        {text}
      </span>
    </div>
  )
}

export default Hero
