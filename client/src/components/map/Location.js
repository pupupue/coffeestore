import React from 'react'

function Location({ location, setCoordinates }) {
  const { name, address, latlan } = location;

  return (
    <div className="location__List__child bottom-light">
      <h2>{name}</h2>
      <p>{address}</p>
      <button
        onClick={() => {
          setCoordinates(latlan)
        }}
        className="button button-buy"
      >Go To
      </button>
    </div>
  )
}

export default Location
