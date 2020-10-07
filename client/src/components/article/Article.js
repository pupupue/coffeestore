import React from 'react'

function Article({
  title, tag, content, imgName, articleUrl
}) {

  const imgUrl = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + '/images/' + imgName + ")"
  };
  
  return (
    <section className="article">
      <div className="img" style={imgUrl}/>
      <div className="article__content">
        <h3>{tag}</h3>
        <h2>{title}</h2>
        <p>{content}</p>
        <button 
          className="button button-dark-inverse clearfix"
          // onClick={}//articleUrl
        >
          Click Me
        </button>
      </div>
    </section>
  )
}

export default Article
