/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>, {author?.summary || null}
          {` `}
          Follow me!
          <a href={"https://github.com/" + social.github} className="item-link">
            <i className="fab fa-github"></i>
          </a>
          <a
            href={"https://www.linkedin.com/in/" + social.linkedin}
            className="item-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href={"https://github.com/" + social.twitter}
            className="item-link"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
