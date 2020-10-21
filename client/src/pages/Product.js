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

  //scroll top
  useEffect(() => {
    window.scrollTo(0, 0)
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
    console.log('redirect')
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
              src={imgPath + product.imgUrl}
              alt=""
            />
            <div className="product__details">
              <h2>{product.titles['ENG']}</h2>
              <p>{product.description}</p>
              <h3>{product.titles['ZH']}</h3>
              <ul>
                <li>{product.origin}</li>
                <li>{product.type}</li>
              </ul>
              <p className="price">{currency}{product.price}</p>
              <AddToCart item={product}/>
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
