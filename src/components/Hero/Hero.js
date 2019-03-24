import React from "react"
import PropTypes from "prop-types"

const Hero = ({ data }) => {
  const { heroDescription, heroDescriptionMobile } = data

  return (
    <div className="hero">
      <p className="hero__intro">{heroDescription}</p>
      <p className="hero__mobile hide">{heroDescriptionMobile}</p>
    </div>
  )
}

Hero.propTypes = {
  data: PropTypes.shape({
    heroDescription: PropTypes.string.isRequired,
    heroDescriptionMobile: PropTypes.string,
  }),
}

export default Hero
