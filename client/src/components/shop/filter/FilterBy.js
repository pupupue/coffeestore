import React, { useState, useEffect, useMemo, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import AllFtFilter from './AllFtFilter';
import AscDescFilter from './AscDescFilter';
import { PRODUCT } from '../../../store/types';
import { applyFilter } from '../../../store/actions/product';
const {
  FILTER_ALL,
  FILTER_FEATURED,
  FILTER_PRICE_ASC,
  FILTER_PRICE_DESC,
  DONT_FILTER_BY
} = PRODUCT;

function FilterBy() {
  const dispatch = useDispatch();
  const [toggleAll, setToggleAll] = useState(true);
  const [toggleFt, setToggleFt] = useState(false);
  const [toggleAsc, setToggleAsc] = useState(false);
  const [toggleDesc, setToggleDesc] = useState(false);
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    filterContent: FILTER_ALL,
    filterBy: DONT_FILTER_BY
  });

  function filterReducer(filterState, action) {
    switch (action.type) {
      case FILTER_ALL:
        return {...filterState, filterContent: FILTER_ALL};
      case FILTER_FEATURED:
        return {...filterState, filterContent: FILTER_FEATURED};
      case FILTER_PRICE_ASC:
        return {...filterState, filterBy: FILTER_PRICE_ASC};
      case FILTER_PRICE_DESC:
        return {...filterState, filterBy: FILTER_PRICE_DESC};
      case DONT_FILTER_BY:
        return {...filterState, filterBy: DONT_FILTER_BY};
      default:
        return filterState;
    }
  }

  useEffect(() => {
    //first collect correct content
    dispatch(applyFilter(filterState.filterContent));
    //then apply filter
    dispatch(applyFilter(filterState.filterBy));
  }, [filterState, dispatch]);

  useMemo(() => {
    if (filterState.filterContent === FILTER_ALL) setToggleFt(false);
    if (filterState.filterContent === FILTER_FEATURED) setToggleAll(false);
    if (filterState.filterBy === FILTER_PRICE_ASC) setToggleDesc(false);
    if (filterState.filterBy === FILTER_PRICE_DESC) setToggleAsc(false);
  }, [filterState]);

  return (
    <aside className="aside">
      <div className="aside__sticky">
        <h3 className="bottom-light">Filter by</h3>
        <AllFtFilter
          dispatch={filterDispatch}
          filterAll={[toggleAll, setToggleAll, FILTER_ALL]}
          filterFt={[toggleFt, setToggleFt, FILTER_FEATURED]}
        />
        <AscDescFilter
          dispatch={filterDispatch}
          filterAsc={[toggleAsc, setToggleAsc, FILTER_PRICE_ASC]}
          filterDesc={[toggleDesc, setToggleDesc, FILTER_PRICE_DESC]}
          reset={DONT_FILTER_BY}
        />
      </div>
    </aside>
  )
}

export default FilterBy
