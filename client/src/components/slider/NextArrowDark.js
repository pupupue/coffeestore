import React from 'react';

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{backgroundImage: "url('"+ process.env.PUBLIC_URL +"/images/right-arrow-dark.svg')"}}
    />
  );
}

export default SampleNextArrow;