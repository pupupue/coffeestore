import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import FeaturedProduct from './FeaturedProduct';
import { getAllFtProducts } from '../../store/actions/product';
import Loading from '../loading/Loading';

function FeaturedProducts() {
  const dispatch = useDispatch();
  const { ftproducts } = useSelector(state => ({
    ftproducts: state.product.ftproducts,
  }))
  useEffect(() => {
    dispatch(getAllFtProducts())
  }, [dispatch])

  return (
    <div className="item-list">
      {!ftproducts ? (
        <Loading />
        ) : ( 
          ftproducts.map((product, key) => 
            <FeaturedProduct
              key={key}
              item={product}
            />
          )
        )}
    </div>
  )
}

export default FeaturedProducts
