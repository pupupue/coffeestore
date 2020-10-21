import React from 'react'

function HeroText({
  text
}) {

  const paragraphs = text.map((t, key) =>
    <p key={key}>{t.paragraph}</p>
  )

  return (
    <div className="hero__text">
      {paragraphs}
    </div>
  )
}

export default HeroText
