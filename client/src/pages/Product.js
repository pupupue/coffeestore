import React, { Fragment, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct, resetError } from '../store/actions/product';
import AddToCart from '../components/shop/AddToCart';
import HeadingSection from '../components/heading/HeadingSection';
import FeaturedProducts from '../components/shop/FeaturedProducts';
import Loading from '../components/loading/Loading';

function Product({
  match
}) {
  const dispatch = useDispatch();
  const [err, setErr] = useState();
  const [quantity, setQuantity] = useState(1);

  //scroll top
  useEffect(() => {
    window.scrollTo(0, 0)
    setQuantity(1)
  }, [match.params.id])

  //set Product
  const { product, error } = useSelector(state => ({
    product: state.product.product,
    error: state.product.error,
  }))

  //get Product
  useEffect(() => {
    dispatch(getProduct(match.params.id))
  }, [dispatch, match.params.id]);

  //set error state
  useEffect(() => {
    setErr(error)
    dispatch(resetError())
  }, [dispatch, error])

  const imgPath = process.env.PUBLIC_URL +'/images/';
  const currency = "$";

  if (err) {
    return <Redirect to="/404" />;
  }

  return (
    <Fragment>
      <div className="product__container">
        {product === null ? (
          <Loading />
        ) : (
          <Fragment>
            <img
              src={imgPath + product.imgUrl + '-large.png'}
              srcSet={imgPath + product.imgUrl + '-small.png 352w,'
              + imgPath + product.imgUrl + '-medium.png 768w,'
              + imgPath + product.imgUrl + '-large.png 1200w,'}
              alt=""
            />
            <div className="product__details">
              <h2>{product.titles['ENG']}</h2>
              <p>{product.description}</p>
              <h3>{product.titles['ZH']}</h3>
              <ul>
                <li>{product.origin}</li>
                <li>{product.type}</li>
                <li>{product.weight["KG"]} kg</li>
              </ul>
              <p className="price">{currency}{product.price}</p>
              <AddToCart item={product} quantity={quantity} setQuantity={setQuantity} />
            </div>
          </Fragment>
        )}
      </div>
      <HeadingSection mainTxt="Featured Products" secondaryTxt="特色產品" />
      <FeaturedProducts />
    </Fragment>
  )
}

export default Product
