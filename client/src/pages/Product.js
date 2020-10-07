import React, { Fragment } from 'react';
import AddToCart from '../components/shop/AddToCart';
import Description from '../components/shop/Description';


function Product({
  match
}) {

  const product = {
    productId: 1,
    imgName: 'coffee-bag.png',
    productTitle: "Dark Roast Espresso",
    productTitleForeign: "深色烤浓咖啡",
    origin: "Columbia",
    price: "$96.00",
    type: "Ground",
    description: "Diego Sanjero: Buenos Estate, Centroamericano, Natural 340g"
  }
  const imgUrl = process.env.PUBLIC_URL +'/images/'+ product.imgName;

  return (
    <div className="product__container">
      {product === null ? (
        <p>loading</p>
      ) : (
        <Fragment>
          <a href={imgUrl}>
            <img
              src={imgUrl}
              alt=""
            />
          </a>
          <div className="product__details">
            <h2>{product.productTitle}</h2>
            <h3>{product.productTitleForeign}</h3>
            <p>{product.origin}</p>
            <p>{product.type}</p>
            <p className="bottom-light price">{product.price}</p>
            <AddToCart id={product.productId}/>
            <Description description={product.description}/>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default Product
