import React, { useRef, useEffect, Fragment } from 'react'
import L from  'leaflet';
import { Map, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllStores } from '../../store/actions/store';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



function LeafletMap({ coordinates }) {
  const mapRef = useRef();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllStores())
  }, [dispatch]);

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    map.flyTo(coordinates, 14, {
      duration: 3
    })
  }, [mapRef, coordinates])

  const { locations } = useSelector(state => ({
    locations: state.store.stores
  }));

  return (
    <Fragment>
      <Map ref={mapRef} center={[22.3143, 114.1788]} zoom={4} zoomControl={false}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        <ZoomControl position="bottomright"/>
        {locations === null || locations === undefined ? (
          null
        ) : ( 
          locations.map((location, key) => 
            <Marker key={key} position={location.latlan}>
              <Popup>{location.address}</Popup>
            </Marker>
          )
        )}
      </Map>

    </Fragment>
  )
}

export default LeafletMap

