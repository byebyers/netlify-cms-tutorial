import React from "react"
import { graphql } from 'gatsby'


export default ({ data }) => {
  console.log(data)
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
        </div>
      ))}
    </div>

  )
}


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
