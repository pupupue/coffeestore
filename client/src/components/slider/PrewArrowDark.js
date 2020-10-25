import React from 'react';

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{backgroundImage: "url('"+ process.env.PUBLIC_URL +"/images/left-arrow-dark.svg')"}}
    />
  );
}

export default SamplePrevArrow;
