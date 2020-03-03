import React from "react"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"
import Image from "../components/image"
import styled from "styled-components"
const latestPosts = ({ data }) => {
  return (
    <LatestPosts>
      <h2>{data.title}</h2>
      <div className="posts">
        {data.posts.map((post, index) => {
          const { title, image, description } = post
          return (
            <article className="post" key={index}>
              <Link to={`/blog/${slugify(title)}`}>
                <Image image={image} />
                <h4>{title}</h4>
                <p>{description}</p>
              </Link>
            </article>
          )
        })}
      </div>
      <Link className="button" to="/blog">
        View All Posts
      </Link>
    </LatestPosts>
  )
}

const LatestPosts = styled.section`
  padding: 25px;
  h2 {
    text-decoration: underline;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 50px 0;

    font-size: 2.2rem;
  }

  .posts {
    .post {
      margin: 25px 0;
      h4,
      p {
        margin: 5px 0;
      }
      a {
      }
      img {
        max-height: 200px;
        object-fit: cover;
      }
    }
  }

  .button {
    display: block;
    margin: 25px auto;
    border: none;
    padding: 15px;
    max-width: 300px;
    text-decoration: none;
    background: #333;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 2px;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 30px;
    border: 1px solid #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }

  .button:hover,
  .button:focus {
    background: #fff;
    color: #2b2b2b;
    border: 1px solid #333;
  }

  .button:active {
    transform: scale(0.99);
  }

  @media screen and (min-width: 768px) {
    .posts {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      .post {
        width: 30%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .posts {
      max-width: 1024px;
      margin: 0 auto;
      .post {
        width: 30%;
      }
    }
  }
`

export default latestPosts
