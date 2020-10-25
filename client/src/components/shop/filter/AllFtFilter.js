import React from 'react';
import Filter from './Filter';

function AllFtFilter({
  dispatch,
  filterAll,
  filterFt,
}) {
  const [toggleAll, setToggleAll, FILTER_ALL] = filterAll;
  const [toggleFt, setToggleFt, FILTER_FEATURED] = filterFt;

  return (
    <div>
      <Filter
        content="All"
        filter={FILTER_ALL}
        updateFn={dispatch}
        toggle={toggleAll}
        setToggle={setToggleAll}
      />
      <Filter
        content="Featured"
        filter={FILTER_FEATURED}
        updateFn={dispatch}
        toggle={toggleFt}
        setToggle={setToggleFt}
      />
    </div>
  )
}

export default AllFtFilter
