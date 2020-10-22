import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import ShoppingCart from './ShoppingCart';
import Logo from '../components/logo/Logo';
import useToggle from '../components/hooks/useToggle';
import useWindowSize from '../components/hooks/useWindowSize';
import useClickOutside from '../components/hooks/useClickOutside';
import { createCart } from  '../store/actions/cart';

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggleClass, setToggleClass] = useToggle(false);
  const size = useWindowSize();
  const width = size.width;
  const refMenu = useRef(null);
  const refButton = useRef(null);

  useEffect(() => {
    dispatch(createCart());
  }, [dispatch]);

  useEffect(() => {
    //fixes resize before class re-trigger 
    if(width >= 1200 && toggleClass === true) {
      setToggleClass()
    }
  }, [width, toggleClass, setToggleClass]);

  useClickOutside(refMenu, refButton, toggleClass, setToggleClass);

  return (
    <div className='navbar'>
      <Logo />
      <NavLink to="/" className="nav__title">
        <h1>Bulgatta</h1>
      </NavLink>
      <nav 
        ref={refMenu}
        className={toggleClass ? 'menu is-open' : 'menu'} id="main-menu"
        onClick={(width < 1200) ? setToggleClass : null}
      >
        <div className="menu-dropdown">
          <Menu className="nav-menu" />
        </div>
      </nav>
      <ShoppingCart />
      <div className="nav__background"></div>
      {width < 1200 && <button
        className="menu-toggle"
        id="toggle-menu"
        onClick={setToggleClass}
        ref={refButton}
      >
        toggle menu
      </button>
      }
    </div>
  );
};

export default Navbar;
