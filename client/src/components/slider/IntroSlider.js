import React, { Fragment } from 'react';
import Slider from "react-slick";

import NextArrow from './NextArrow';
import PrewArrow from './PrewArrow';
import Slide from './Slide';

const IntroSlider = () => {

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

  const slideValues = [
    {
      img: "coffee-and-husouint.jpg",
      title:"Focus on the wonderful experience found in every cup of coffee",
      titleForeign:"專注於每一杯咖啡的美好體驗",
      postUrl:"/article/1"
    },
    {
      img: "coffee-store-man.jpg",
      title:"Buggatta cafe, 20 years in service and counting!",
      titleForeign:"Buggatta咖啡厅，已经有20年的服务历史了!",
      postUrl:"/article/2"
    },
    {
      img: "coffee-cettle.jpg",
      title:"All orders ship for FREE, same or next business day",
      titleForeign:"所有订单均在同一工作日或下一个工作日免费送货",
      postUrl:"/article/3"
    },
  ];

  return (
    <Fragment>
      <Slider {...settings}>
        {
          slideValues.length && slideValues.map((slide, key) => 
            <Slide
              key={key}
              img={slide.img} 
              titleForeign={slide.titleForeign} 
              title={slide.title} 
              postUrl={slide.postUrl}
            />
          )
        }
      </Slider>
    </Fragment>
  );
};

export default IntroSlider;
