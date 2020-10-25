import React, { useEffect, Fragment } from 'react';
import HeadingSection from '../components/heading/HeadingSection';
import ItemList from '../components/shop/ItemList';
import FilterBy from '../components/shop/filter/FilterBy';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts, getAllFtProducts, setFilteredProducts } from '../store/actions/product';
import Loading from '../components/loading/Loading';

function Shop() {
  const dispatch = useDispatch();
  const { products, filteredproducts } = useSelector(state => ({
    products: state.product.products,
    filteredproducts: state.product.filteredproducts,
  }))
  
  //scroll top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // get Products
  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getAllFtProducts())
  }, [dispatch]);

  // set filterproducts
  useEffect(() => {
    if (products !== null) {
      dispatch(setFilteredProducts())
    }
  }, [dispatch, products]);

  return (
    <Fragment>
      <HeadingSection mainTxt="Shop" secondaryTxt="店" />
      <div className="shop-container">
        <FilterBy />
        {!filteredproducts ? (
          <Loading />
          ) : (
          <ItemList items={filteredproducts} />
        )}
      </div>
    </Fragment>
  )
}

export default Shop
