import React from 'react'
import { Link } from 'react-router-dom'

function ArticleItem({
  title, tags, content, imgName, articleUrl
}) {

  const imgUrl = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + '/images/' + imgName + ")"
  };
  
  return (
    <section className="article">
      <div className="img" style={imgUrl}/>
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
