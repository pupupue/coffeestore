import React, { Fragment } from 'react'
import HeadingSection from '../components/heading/HeadingSection';
import ItemList from '../components/shop/ItemList';
import Aside from '../parts/Aside';
import {items} from '../utils/itemsarray'; //delete !!!


function Shop() {

  return (
    <Fragment>
      <HeadingSection mainTxt="Shop" secondaryTxt="店" />
      <div className="shop-container">
        <Aside />
        <ItemList 
          items_object={items}
        />
      </div>
    </Fragment>
  )
}

export default Shop
