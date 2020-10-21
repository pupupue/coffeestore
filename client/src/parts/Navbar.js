import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import ShoppingCart from './ShoppingCart';
import Logo from '../components/logo/Logo';
import useToggle from '../components/hooks/useToggle';
import useWindowSize from '../components/hooks/useWindowSize';
import useClickOutside from '../components/hooks/useClickOutside';
import { createCart } from  '../store/actions/cart';

const setClass = (toggleClass, width, setShowClass) => {
  if(width >= 1200) {
    return setShowClass(false);
  } else if (toggleClass) {
    return setShowClass(true);
  } else if (!toggleClass){
    return setShowClass(false);
  }
  return setShowClass(false);
}

const Navbar = () => {
  const dispatch = useDispatch();
  const [showClass, setShowClass] = useState(false);
  const [toggleClass, setToggleClass] = useToggle(false);
  const size = useWindowSize();
  const width = size.width;
  const ref = useRef(null);

  useEffect(() => {
    setClass(toggleClass, width, setShowClass)
  }, [toggleClass, width, setShowClass]);

  useEffect(() => {
    dispatch(createCart());
  }, [dispatch]);

  useClickOutside(ref, toggleClass && setToggleClass);

  return (
    <div ref={ref} className='navbar'>
      <Logo />
      <NavLink to="/" className="nav__title">
        <h1>Bulgatta</h1>
      </NavLink>
      <nav className={showClass ? 'menu is-open' : 'menu'} id="main-menu">
        <div className="menu-dropdown">
          <Menu className="nav-menu" />
        </div>
      </nav>
      <ShoppingCart />

      {width < 1200 && <button 
        className="menu-toggle"
        id="toggle-menu"
        onClick={setToggleClass}
      >
        toggle menu
      </button>
      }
    </div>
  );
};

export default Navbar;
