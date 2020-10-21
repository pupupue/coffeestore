import React from 'react'
import ArticleItem from './ArticleItem';
import Loading from '../loading/Loading';

function ArticleList({ articles }) {
  return (
    <div className="articles">  
      {articles === null || articles === undefined ? (
        <section className="article">
          <Loading />
        </section>
      ) : (
        articles.map((article, key) => 
          <ArticleItem
            key={key}
            title={article.title} 
            tags={article.tags} 
            content={article.heading} 
            imgName={article.imgUrl}
            articleUrl={article._id}
          />
        )
      )}
    </div>
  )
}

export default ArticleList
