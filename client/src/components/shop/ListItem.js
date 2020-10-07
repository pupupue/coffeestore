import React from 'react'

function ListItem({
  item: {
    imgName, productTitle, productTitleForeign, origin, price, productId
  }
}) {
  
  const imgUrl = process.env.PUBLIC_URL +'/images/'+ imgName;

  return (
    <div className="list-item">
      <a href={`/product/${productId}`}>
        <img
          src={imgUrl}
          alt=""
        />
        <h3 className="vertical-sidetext">{productTitleForeign}</h3>
        <div className="item__details">
          <h4>{productTitle}</h4>
          <h4 className="bottom-light">{origin}</h4>
          <h4 className="bottom-light price">{price}</h4>
        </div>
      </a>
    </div>
  )
}

export default ListItem
