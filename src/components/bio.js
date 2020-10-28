/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = ({ location }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/mychi.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            instagram
            github
            website
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  const rootPath = `${__PATH_PREFIX__}/`
  // eslint-disable-next-line no-restricted-globals
  const isRootPath = location.pathname === rootPath

  return (
    <div className={`bio ${isRootPath ? '-bordered' : ''}`}>
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <div>
          Hi, I'm <strong>{author.name}</strong>.<br />
          <p style={{ marginTop: 15 }}>
            {author?.summary || null}
          </p>
          <br />
          Catch up with me &nbsp;
          <a href={`https://twitter.com/${social?.twitter || ``}`} target="_blank" rel="noreferrer">
            Twitter
          </a>
          &nbsp;&nbsp;
          <a href={`https://github.com/${social?.github || ``}`} target="_blank" rel="noreferrer">
            Github
          </a>
          &nbsp;&nbsp;
          <a href={`https://instagram.com/${social?.instagram || ``}`} target="_blank" rel="noreferrer">
            Instagram
          </a>
          &nbsp;&nbsp;
          <a href={social?.website} target="_blank" rel="noreferrer">
            My Site
          </a>
        </div>
      )}
    </div>
  )
}

export default Bio
