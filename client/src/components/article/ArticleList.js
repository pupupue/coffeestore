import React from 'react'
import Article from './Article';

function ArticleList({article_object}) {

  const articles = article_object.map((article, key) => 
    <Article
      key={key}
      title={article.title} 
      tag={article.tag} 
      content={article.content} 
      imgName={article.imgName}
      articleUrl={article.articleUrl}
    />
  );

  return (
    <div className="articles">  
      {articles}
    </div>
  )
}

export default ArticleList
