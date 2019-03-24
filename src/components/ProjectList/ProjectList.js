import React from 'react'
import PropTypes from 'prop-types'
import ProjectSlider from '../ProjectSlider'
import { graphql, StaticQuery } from 'gatsby'

const ProjectList = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark
  return (
    <>
      {projects.map(({ node: projects }) => (
        <section className="row" key={projects.id}>
          <div className="row__col1">
            <h2>{projects.frontmatter.title}</h2>
            <p>{projects.frontmatter.description}</p>
            <p>
              {projects.frontmatter.tags.map((tag, index) => (
                <span key={index} className="tags">
                  {tag.tagName}
                </span>
              ))}
            </p>
            <h3>Supports:</h3>
            <ul className="devices">
              {projects.frontmatter.devices.map((device, index) => (
                <li key={index} className={`devices__${device.deviceName}`} />
              ))}
            </ul>
          </div>
          <div className="row__col2">
            <ProjectSlider data={projects.frontmatter} />
          </div>
        </section>
      ))}
    </>
  )
}
ProjectList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "projects" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                tags {
                  tagName
                }
                devices {
                  deviceName
                }
                sliderImages {
                  image {
                    childImageSharp {
                      fluid(maxWidth: 660, quality: 90) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ProjectList data={data} />}
  />
)
