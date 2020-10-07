import React from 'react'
import Location from './Location';

function LocationList({ setCoordinates }) {

  //hook get locations
  const locationsArray = [
    {
      name: "Xing Hua Bulgatta",
      address: "Xing Hua Centre",
      latlan: [22.3140, 114.1687]
    },
    {
      name: "Park Ivy Bulgatta",
      address: "Fuk Tsun St, Tai Kok Tsui,Hong Kong",
      latlan: [22.3213, 114.1639]
    },
    {
      name: "Hope Sea Bulgatta",
      address: "Hope Sea Industrial Centre, 1-9 Lam Lee St, Hong Kong",
      latlan: [22.3242, 114.2099]
    },
    {
      name: "Kwong Wah Bulgatta",
      address: "Kwong Wah Centre, 34-46 Fau Tsoi St, Yuen Long",
      latlan: [22.4439, 114.0300]
    },
  ];

  const locations = locationsArray.map((location, key) => 
    <Location
      key={key}
      location={location}
      setCoordinates={setCoordinates}
    />
  );

  return (
    <div className="location__List"> 
      {locations}
    </div>
  )
}

export default LocationList
