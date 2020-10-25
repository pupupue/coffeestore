import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '../hooks/useMediaQuery';

function ArticleItem({
  title, tags, content, imgName, articleUrl
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
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  } else if (isMedium) {
    style = {
      backgroundColor: '#9d4d28',
      backgroundImage: 'url(' + imgPath + imgName + '-medium.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  } else if (isSmall) {
    style = {
      backgroundColor: '#9d4d28',
      backgroundImage: 'url(' + imgPath + imgName + '-small.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  }
  
  return (
    <section className="article">
      <div className="img" style={style}/>
      <div className="article__content">
        <h3>{tags.map(tag => tag + " ")}</h3>
        <h2>{title}</h2>
        <p>{content}</p>
        <Link 
          className="button button-dark-inverse clearfix"
          to={`/article/${articleUrl}`}
        >
          Read More
        </Link>
      </div>
    </section>
  )
}

export default ArticleItem
