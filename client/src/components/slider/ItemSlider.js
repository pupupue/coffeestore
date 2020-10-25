import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import NextArrowDark from './NextArrowDark';
import PrewArrowDark from './PrewArrowDark';
import ItemSlide from './ItemSlide';

const ItemSlider = ({items}) => {

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,  
    nextArrow: <NextArrowDark />,
    prevArrow: <PrewArrowDark />
  };

  return (
    <div
      style={{
        marginTop: 0,
        backgroundColor: '#f6f5c5',
      }}
    >
      <Slider {...settings}>
        {
        items.map((item, key) => 
          <ItemSlide
            key={key}
            item={item}
          />
        )}
        <div>
          <div className="item_slide__item go-to-shop">
            <h2>Looking for more?</h2>
            <Link to="/shop">
              <button className="button button-dark-inverse">
                Visit Shop
              </button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
    
  );
};

export default ItemSlider;
