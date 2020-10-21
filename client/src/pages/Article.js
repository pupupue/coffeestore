import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticle, resetError } from '../store/actions/article';
import { Redirect } from 'react-router-dom';
import Loading from '../components/loading/Loading';

function Article({
  match
}) {
  const dispatch = useDispatch();
  const [err, setErr] = useState();
  const { article, error } = useSelector(state => ({
    article: state.article.article,
    error: state.article.error
  }));
  
  //scroll top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  //get Article
  useEffect(() => {
    dispatch(getArticle(match.params.id))
  }, [dispatch, match.params.id]);
  //set error state
  useEffect(() => {
    setErr(error)
    dispatch(resetError())
  }, [dispatch, error])

  if (err) {
    console.log('redirect')
    return <Redirect to="/404" />;
  }

  return (
      article === null || article === undefined ? (
        <section className="article">
          <Loading />
        </section>
      ) : (
        <section className="article">
          <div className="img" style={{
            backgroundImage: "url(" + process.env.PUBLIC_URL + '/images/' + article.imgUrl + ")"
          }}/>
          <div className="article__content">
            <h2>{article.title}</h2>
            <small>Created on: {new Date(article.date).toDateString()}</small>
            <p>{article.heading}</p>
            <p>{article.text}</p>
            <small>Written by {article.createdBy}</small>
          </div>
        </section>
      )
  )


}

export default Article
