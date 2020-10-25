import React from 'react';

function Filter({content, filter, reset = false, updateFn, toggle, setToggle}) {
  const style = {
    fontWeight: '900',
    textShadow: '1px 0 #000'
  };
  
  const onClick = e => { 
    e.preventDefault();
    setToggle(!toggle)
    if(!toggle) {
      updateFn({type: filter});
    } else if (reset) { 
      updateFn({type: reset});
    }
  };

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
