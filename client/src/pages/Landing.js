import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import IntroSlider from '../components/slider/IntroSlider';
import ItemSlider from '../components/slider/ItemSlider';
import ItemList from '../components/shop/ItemList';
import ArticleList from '../components/article/ArticleList';
import HeadingSection from '../components/heading/HeadingSection';
import useWindowSize from '../components/hooks/useWindowSize';
import Loading from '../components/loading/Loading';

import { getProducts } from '../store/actions/product';
import { getAllFtArticleContent } from '../store/actions/article';

const Landing = () => {
  const dispatch = useDispatch()
  const size = useWindowSize();
  const width = size.width;
  const [showItemSlider, setshowItemSlider] = useState(width >= 768);
  //dispatch get all article action
  useEffect(() => {
    dispatch(getAllFtArticleContent())
  }, [dispatch]);
  //dispatch get all products action
  useEffect(() => {
    dispatch(getProducts(4))
  }, [dispatch]);

  useEffect(() => {
    setshowItemSlider(width >= 768)
  }, [width]);

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
      <HeadingSection mainTxt="Products" secondaryTxt="产品" />
      {!items ? (
        <Loading />
        ) : (
        !showItemSlider ? (
          <ItemList 
            items={items}
          />
        ) : (
          <ItemSlider 
            items={items}
          />
        )
      )}
      <HeadingSection mainTxt="Bringing Coffee Love to the Community" secondaryTxt="给社区带来咖啡之爱" />
    </Fragment>
  );
};

export default Landing;
