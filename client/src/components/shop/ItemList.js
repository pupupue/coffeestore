import React from 'react'
import ListItem from './ListItem';
import Loading from '../loading/Loading';

function ItemList({ items }) {
  return (
    <div className="item-list-container">
      <div className="item-list">
        {items === null || items === undefined ? (
          <Loading />
        ) : ( 
          items.map((item, key) => 
            <ListItem
              key={key}
              item={item}
            />
          )
        )}
      </div>
    </div>
  )
}

export default ItemList;
