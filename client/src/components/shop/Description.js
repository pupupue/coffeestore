import React, { Fragment } from 'react'

function Description({description}) {

  return (
    <Fragment>
      <h2>Description</h2>
      <p className="bottom-light">{description}</p>
    </Fragment>
  )
}

export default Description
