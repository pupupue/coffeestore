import React from 'react'
import { Link } from 'react-router-dom';

function Menu({className}) {
  return (
    <ul className={className}>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/locations">Cafés</Link></li>
    </ul>
  )
}

export default Menu
