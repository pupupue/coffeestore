import React, { Fragment, useState, useEffect } from 'react'
import LeafletMap from '../components/map/LeafletMap';
import LocationList from '../components/map/LocationList';
import HeadingSection from '../components/heading/HeadingSection';


function Locations() {
  //scroll top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [ coordinates, setCoordinates ] = useState([22.3143, 114.1788])

  return (
    <Fragment>
      <HeadingSection mainTxt="Locations" secondaryTxt="地点" />  
      <div className="map__container">
        <LeafletMap coordinates={coordinates} />
        <LocationList  setCoordinates={setCoordinates} />
      </div>
    </Fragment>
  )
}

export default Locations
