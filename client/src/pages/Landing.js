import React, { Fragment, useEffect } from 'react';
import IntroSlider from '../components/slider/IntroSlider';
import ItemList from '../components/shop/ItemList';
import ArticleList from '../components/article/ArticleList';
import HeadingSection from '../components/heading/HeadingSection';
import {items} from '../utils/itemsarray'; //delete !!!

const Landing = () => {
  useEffect(() => {

  }, []);

  const articles = [
    {
      title: 'Cafe',
      tag: 'Tag',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus placeat odit nisi at autem, numquam esse nihil fugiat error dolores nobis rem obcaecati delectus nesciunt porro totam laboriosam maxime? Commodi!',
      imgName: 'coffee-pour.jpg',
      articleUrl: '/'
    },
    {
      title: 'Cafe',
      tag: 'Tag',
      content: 'Lorem Lorem dolor sit amet, consectetur adipisicing elit. Natus placeat odit nisi at autem, numquam esse nihil fugiat error dolores nobis rem obcaecati delectus nesciunt porro totam laboriosam maxime? Commodi!',
      imgName: 'coffee-pour.jpg',
      articleUrl: '/'
    }
  ];

  return (
    <Fragment>
      <IntroSlider />
      <HeadingSection mainTxt="Featured" secondaryTxt="精選內容" />
      <ArticleList 
        article_object={articles}
      />
      <HeadingSection mainTxt="Product" secondaryTxt="产品" />
      <ItemList 
        items_object={items}
      />
      <HeadingSection mainTxt="Bringing Coffee Love to the Community" secondaryTxt="给社区带来咖啡之爱" />
    </Fragment>
  );
};

export default Landing;
