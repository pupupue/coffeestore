import React from 'react'

function HeadingSection({mainTxt, secondaryTxt}) {
  
  return (
    <div className="heading-section">
      <h2>{mainTxt}</h2>
      <h3>{secondaryTxt}</h3>
    </div>
  )
}

export default HeadingSection
