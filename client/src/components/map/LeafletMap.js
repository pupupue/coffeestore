import React, { useRef, useEffect, Fragment } from 'react'
import L from  'leaflet';
import { Map, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



function LeafletMap({ coordinates }) {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    map.flyTo(coordinates, 14, {
      duration: 3
    })
  }, [mapRef, coordinates])
  
  //hook get locations
  const locationsArray = [
    {
      name: "Xing Hua Bulgatta",
      address: "Xing Hua Centre, Hong Kong",
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

  const MyMarkersList = () => {
    const items = locationsArray.map(( location, key ) => (
      <Marker key={key} position={location.latlan}>
        <Popup>{location.address}</Popup>
      </Marker>
    ))
    return <Fragment>{items}</Fragment>
  }

  return (
    <Fragment>
      <Map ref={mapRef} center={[22.3143, 114.1788]} zoom={4} zoomControl={false}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        <ZoomControl position="bottomright"/>
        <MyMarkersList />
      </Map>

    </Fragment>
  )
}

export default LeafletMap
