import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import ProjectSliderWrapper from './ProjectSliderWrapper'

const ProjectSlider = ({ data }) => (
  <ProjectSliderWrapper>
    {data.sliderImages.map((sliderImage, i) => {
      const index = i + 1
      const width = { width: '660px' }
      return (
        <Img
          key={index}
          fluid={sliderImage.image.childImageSharp.fluid}
          alt={`${data.title} Slider-${index}`}
          style={width}
        />
      )
    })}
  </ProjectSliderWrapper>
)

ProjectSlider.propTypes = {
  data: PropTypes.shape({
    sliderImages: PropTypes.array,
  }),
}

export default ProjectSlider
