import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticle, resetError } from '../store/actions/article';
import { Redirect } from 'react-router-dom';
import Loading from '../components/loading/Loading';
import { useMediaQuery } from '../components/hooks/useMediaQuery';

function Article({
  match
}) {
  const dispatch = useDispatch();
  const [err, setErr] = useState();
  const { article, error } = useSelector(state => ({
    article: state.article.article,
    error: state.article.error
  }));
  const imgPath = process.env.PUBLIC_URL +'/images/';
  const isSmall = useMediaQuery('(min-width: 352px)');
  const isMedium = useMediaQuery('(min-width: 768px)');
  const isLarge = useMediaQuery('(min-width: 1200px)');
  let style;

  if(article !== null) {
    if(isLarge) {
      style = {
        backgroundImage: 'url(' + imgPath + article.imgUrl + '-large.png)',
      };
    } else if (isMedium) {
      style = {
        backgroundImage: 'url(' + imgPath + article.imgUrl + '-medium.png)',
      };
    } else if (isSmall) {
      style = {
        backgroundImage: 'url(' + imgPath + article.imgUrl + '-small.png)',
      };
    }
  }
  
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
    return <Redirect to="/404" />;
  }

  return (
      article === undefined || article === null ? (
        <section className="article">
          <Loading />
        </section>
      ) : (
        <section className="article">
          <div className="img" style={style}/>
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
