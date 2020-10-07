import React from 'react'

function Menu({className}) {
  return (
    <ul className={className}>
      <li><a href="/about">About</a></li>
      <li><a href="/shop">Shop</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/locations">Cafés</a></li>
    </ul>
  )
}

export default Menu
