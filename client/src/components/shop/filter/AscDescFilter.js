import React, { Fragment } from 'react';
import Filter from './Filter';

function AscDescFilter ({
  dispatch,
  filterAsc,
  filterDesc,
  reset,
}) {
  const [toggleAsc, setToggleAsc, FILTER_PRICE_ASC] = filterAsc;
  const [toggleDesc, setToggleDesc, FILTER_PRICE_DESC] = filterDesc;

  return (
    <Fragment>
      <Filter
        content="Price: asc"
        filter={FILTER_PRICE_ASC}
        reset={reset}
        updateFn={dispatch}
        toggle={toggleAsc}
        setToggle={setToggleAsc}
      />
      <Filter
        content="Price: desc"
        filter={FILTER_PRICE_DESC}
        reset={reset}
        updateFn={dispatch}
        toggle={toggleDesc}
        setToggle={setToggleDesc}
      />
    </Fragment>
  )
}

export default AscDescFilter
