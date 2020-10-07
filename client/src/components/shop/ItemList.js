import React from 'react'
import ListItem from './ListItem';

function ItemList({items_object}) {
  
  const items = items_object.map((item, key) => 
    <ListItem
      key={key}
      item={item}
    />
  );

  return (
    <div className="item-list-container">
      <div className="item-list">
        {items}
      </div>
    </div>
  )
}

export default ItemList;
