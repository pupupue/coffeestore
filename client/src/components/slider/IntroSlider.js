import React, { useEffect, Fragment } from 'react';
import Slider from "react-slick";

import NextArrow from './NextArrow';
import PrewArrow from './PrewArrow';
import Slide from './Slide';
import { useSelector, useDispatch } from 'react-redux';
import { getAllIntro } from '../../store/actions/article';

const IntroSlider = () => {
  const dispatch = useDispatch()
  //dispatch get all article action
  useEffect(() => {
    dispatch(getAllIntro())
  }, [dispatch]);

  const { introArticles } = useSelector(state => ({
    introArticles: state.article.introarticles
  }));

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,  
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <NextArrow />,
    prevArrow: <PrewArrow />
  };

  const defaultSlide = [
    {
      img: "coffee-and-husouint.jpg",
      title:"Focus on the wonderful experience found in every cup of coffee",
      titleForeign:"專注於每一杯咖啡的美好體驗",
      postUrl:"/"
    }
  ];
  return (
    <Fragment>
      <Slider {...settings}>
        {
          introArticles === null || introArticles === undefined ? (
            defaultSlide.map((slide, key) => 
              <Slide
                key={key}
                img={slide.img}
                titleForeign={slide.titleForeign} 
                title={slide.title} 
                postUrl={slide.postUrl}
              />
            )
          ) : ( 
            introArticles.map((slide, key) => 
              <Slide
                key={key}
                img={slide.ftImg} 
                titleForeign={slide.titles["ZH"]} 
                title={slide.titles["ENG"]} 
                postUrl={slide.articleId}
              />
          ))
        }
      </Slider>
    </Fragment>
  );
};

export default IntroSlider;
