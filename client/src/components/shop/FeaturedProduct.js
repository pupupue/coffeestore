import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedProduct({
  item: {
    imgUrl, titles, _id
  }
}) {
  const img = process.env.PUBLIC_URL +'/images/'+ imgUrl;
  const title_main = titles["ENG"];
  const title_foreign = titles["ZH"];

  return (
    <div className="list-item__featured">
      <Link 
        to={`/product/${_id}`}
      >
        <img
          src={img}
          alt=""
        />
        <h3 className="vertical-sidetext">{title_foreign}</h3>
        <div className="item__details">
          <h4>{title_main}</h4>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedProduct
