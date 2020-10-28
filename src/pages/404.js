import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>
        Whoops...no article found here. There might have been a mistake with your url.&nbsp;
        <a href="https://github.com/mr-phlames/mychi-guides" target="_blank" rel="noreferrer">Open an issue</a>
        &nbsp;if you believe this is an error.
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
