import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "./scss/instagram.module.scss"
const instagram = () => (
  <StaticQuery
    query={graphql`
      {
        allInstaNode(sort: { fields: timestamp, order: DESC }) {
          edges {
            node {
              id
              caption
              # Only available with the public api scraper
              thumbnails {
                src
                config_width
                config_height
              }
              dimensions {
                height
                width
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section className="section instagram" style={{ background: `#f9f9f9` }}>
        <h2 className={styles.h3}>Instagram</h2>

        <div className={styles.posts}>
          {data.allInstaNode.edges.map((item, index) => {
            while (index < 10) {
              return (
                <div className={styles.post} key={index}>
                  <a
                    href={`https://www.instagram.com/p/${item.node.id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={item.node.thumbnails[1].src}
                      width={item.node.thumbnails[1].config_width}
                      height={item.node.thumbnails[1].config_height}
                      loading="lazy"
                      title={item.node.caption}
                      alt={item.node.caption}
                    />
                  </a>
                </div>
              )
            }
            return false
          })}
        </div>
      </section>
    )}
  />
)

export default instagram
