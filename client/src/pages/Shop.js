import React, { useEffect, Fragment } from 'react';
import HeadingSection from '../components/heading/HeadingSection';
import ItemList from '../components/shop/ItemList';
import Aside from '../parts/Aside';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../store/actions/product';

function Shop() {
  const dispatch = useDispatch();
  
  //scroll top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // get Products
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  
  const { items } = useSelector(state => ({
    items: state.product.products,
  }))

  return (
    <Fragment>
      <HeadingSection mainTxt="Shop" secondaryTxt="店" />
      <div className="shop-container">
        <Aside />
        <ItemList items={items} />
      </div>
    </Fragment>
  )
}

export default Shop
