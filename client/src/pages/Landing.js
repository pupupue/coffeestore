import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import IntroSlider from '../components/slider/IntroSlider';
import ItemList from '../components/shop/ItemList';
import ArticleList from '../components/article/ArticleList';
import HeadingSection from '../components/heading/HeadingSection';

import { getProducts } from '../store/actions/product';
import { getAllFtArticleContent } from '../store/actions/article';

const Landing = () => {
  const dispatch = useDispatch()
  //dispatch get all article action
  useEffect(() => {
    dispatch(getAllFtArticleContent())
  }, [dispatch]);
  //dispatch get all products action
  useEffect(() => {
    dispatch(getProducts(3))
  }, [dispatch]);
  
  const { items, articles } = useSelector(state => ({
    items: state.product.products,
    articles: state.article.articles,
  }))

  return (
    <Fragment>
      <IntroSlider />
      <HeadingSection mainTxt="Featured" secondaryTxt="精選內容" />
      <ArticleList 
        articles={articles}
      />
      <HeadingSection mainTxt="Product" secondaryTxt="产品" />
      <ItemList 
        items={items}
      />
      <HeadingSection mainTxt="Bringing Coffee Love to the Community" secondaryTxt="给社区带来咖啡之爱" />
    </Fragment>
  );
};

export default Landing;
