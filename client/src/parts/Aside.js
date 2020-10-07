import React from 'react'
import Filter from '../components/shop/Filter';

function Aside() {


  return (
    <aside className="aside">
      <div className="aside__sticky">
        <h3 className="bottom-light">Filter by</h3>
          <Filter content="All" type="FILTER_ALL"/>
          <Filter content="Featured" type="FILTER_FEATURED"/>
          <Filter content="Price: asc" type="FILTER_PRICE_ASC"/>
          <Filter content="Price: desc" type="FILTER_PRICE_DESC"/>
      </div>
    </aside>
  )
}

export default Aside
