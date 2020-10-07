import React from 'react'; //, { useEffect } 
import useToggle from '../hooks/useToggle';

function Filter({content, type}) {
  const [toggle, setToggle] = useToggle(false);

  const style = {
    fontWeight: '900',
    textShadow: '1px 0 #000'
  }
  
  const onClick = e => {
    e.preventDefault();
    setToggle()
  };

  //ONCLICK DISPATCH ACTION OF TYPE=type

  return (
    <p
    style={toggle ? style : null}
    onClick={onClick}
    >
      {content}
    </p>
  )
}

export default Filter
