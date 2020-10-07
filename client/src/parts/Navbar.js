import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import useToggle from '../components/hooks/useToggle';
import useWindowSize from '../components/hooks/useWindowSize';
import useClickOutside from '../components/hooks/useClickOutside';

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

  const [showClass, setShowClass] = useState(false);
  const [toggleClass, setToggleClass] = useToggle(false);
  const size = useWindowSize();
  const width = size.width;
  const ref = useRef(null);

  useEffect(() => {
    setClass(toggleClass, width, setShowClass)
  }, [toggleClass, width, setShowClass]);

  useClickOutside(ref, toggleClass && setToggleClass);

  return (
    <div ref={ref} className='navbar'>
      
      <Link to="/">
        <h1>Bulgatta</h1>
      </Link>
       

      <nav className={showClass ? 'menu is-open' : 'menu'} id="main-menu">
        <div className="menu-dropdown">
          <Menu className="nav-menu" />
        </div>
      </nav>

      {
        width < 1200 && <button 
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
