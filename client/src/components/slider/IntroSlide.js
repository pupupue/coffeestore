import React from 'react'
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../hooks/useMediaQuery';

const IntroSlide = ({img, title, titleForeign, postUrl}) => {
  const imgPath = process.env.PUBLIC_URL +'/images/';
  const isSmall = useMediaQuery('(min-width: 352px)');
  const isMedium = useMediaQuery('(min-width: 768px)');
  const isLarge = useMediaQuery('(min-width: 1200px)');
  let style;

  if(isLarge) {
    style = {
      backgroundColor: '#9d4d28',
      backgroundImage: 'url(' + imgPath + img + '-large.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  } else if (isMedium) {
    style = {
      backgroundColor: '#9d4d28',
      backgroundImage: 'url(' + imgPath + img + '-medium.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  } else if (isSmall) {
    style = {
      backgroundColor: '#9d4d28',
      backgroundImage: 'url(' + imgPath + img + '-small.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  }

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

export default IntroSlide
