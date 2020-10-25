import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemSlide = ({
  item: {
    imgUrl, titles, origin, price, _id
  }
}) => {
  const currency = "$";
  const [style] = useState({
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  });
  const imgPath = process.env.PUBLIC_URL +'/images/';

  return (
    <div 
      className="item_slide__item"
    >
      <div
        className="list-item"
        style={style}
      >
        <Link 
          to={`/product/${_id}`}
        >
        <img
          src={imgPath + imgUrl + '-large.png'}
          srcSet={imgPath + imgUrl + '-small.png 352w,'
          + imgPath + imgUrl + '-medium.png 768w,'
          + imgPath + imgUrl + '-large.png 1200w,'}
          alt=""
        />
          <h3 className="vertical-sidetext">{titles["ZH"]}</h3>
          <div className="item__details">
            <h4>{titles["ENG"]}</h4>
            <h4 className="bottom-light">{origin}</h4>
            <h4 className="bottom-light price">{currency}{price}</h4>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ItemSlide
