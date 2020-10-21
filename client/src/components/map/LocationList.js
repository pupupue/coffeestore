import React, { useEffect } from 'react';
import Location from './Location';
import { useSelector, useDispatch } from 'react-redux';
import { getAllStores } from '../../store/actions/store';
import Loading from '../loading/Loading';

function LocationList({ setCoordinates }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllStores())
  }, [dispatch]);
  
  const { locations } = useSelector(state => ({
    locations: state.store.stores
  }))

  return (
    <div className="location__List"> 
      {locations === null || locations === undefined ? (
        <Loading />
      ) : ( 
        locations.map((location, key) => 
          <Location
            key={key}
            location={location}
            setCoordinates={setCoordinates}
          />
        )
      )}
    </div>
  )
}

export default LocationList
