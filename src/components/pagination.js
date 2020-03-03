import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Pagination = props => {
  const { numberOfPages, currentPage } = props
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const isNotPaginated = isFirst & isLast
  const prevPageNum = currentPage - 1 === 1 ? `` : currentPage - 1
  const nextPageNum = currentPage + 1
  const prevPageLink = isFirst ? null : `/blog/${prevPageNum}/`
  const nextPageLink = isLast ? null : `/blog/${nextPageNum}/`

  return (
    <Pagin className="pagination-controls">
      {(!isFirst && (
        <Link to={prevPageLink} className="button">
          &#8592; Prev Page
        </Link>
      )) || <div />}
      {(!isNotPaginated && (
        <span>
          {currentPage}/{numberOfPages}
        </span>
      )) || <div />}
      {(!isLast && (
        <Link to={nextPageLink} className="button">
          Next Page &#8594;
        </Link>
      )) || <div />}
    </Pagin>
  )
}

const Pagin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px auto;
  max-width: 1024px;

  .inner-wrapper {
    max-width: 1440px;
    margin: 0 auto;

    > h2 {
      margin: 60px 50px;
      font-weight: 300;
      font-size: 3rem;
      text-align: center;
      font-family: inherit;
    }
  }

  .button {
    display: inline-block;

    border: none;
    padding: 15px;

    text-decoration: none;
    background: #333;
    color: #ffffff;
    border-radius: 30px;
    min-width: 150px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
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

  .inner-page {
    margin: 150px 0 0 0;
  }

  .lastest-posts {
    .posts {
      display: flex;
      flex-direction: column;
      align-items: center;

      .post {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px;
        position: relative;
        max-width: 400px;
        background: #fff;
        span {
          display: inline-block;
          font-size: 0.8rem;
          color: #2b2b2b;
          margin: 0 0 7.5px 0;
        }
        .new-post {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 101;
          background: #ff4136;
          color: #ffffff;
          padding: 1px 5px;
          border-radius: 5px;
          text-align: center;
        }
        .blog-details {
          display: flex;
          flex-direction: column;
        }
        .blog-thumbnail {
          width: 100%;
          max-width: 100%;
          margin: 0 0 20px 0;
          max-height: 200px;

          min-width: 0;
          max-width: 350px;
        }
        .category {
          margin: 0 0 15px 0;
        }
        h4 {
          margin: 0 0 15px 0;
        }
        p {
          margin: 0 0 25px 0;
          color: #333;
        }

        .description {
          font-size: 0.9rem;
        }
        a {
          color: #555555;
          text-transform: uppercase;
          letter-spacing: 2px;
          &::after {
            content: "";
            border-bottom: 1px solid #333;
            display: inline-block;
            border-bottom-width: 2px;
            display: table-cell;
            color: #555555;
            width: 106px;
          }
        }
        .separator {
          margin: 25px 0 0 0;
          display: inline-block;
          text-align: center;
        }
      }
    }
    .to-blog {
      display: flex;
      justify-content: center;
      margin: 30px 0 30px 0;
      .button {
        background-color: transparent;
        color: #000;
        border: 1px solid #000000;
        padding: 10px;
        font-size: 1.2rem;
        display: inline-block;
        transition: transform 0.3s ease-in-out;

        text-align: center;
        &:hover {
          transform: scale(1.05);
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (min-width: 800px) {
    .lastest-posts {
      .posts {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        .post {
          max-width: 400px;
          align-self: flex-start;
          margin: 0 15px 30px 15px;
          min-height: 500px;
          .blog-thumbnail {
            min-height: 300px;
            min-width: 350px;
          }

          .blog-details {
            display: flex;
            flex-direction: column;
            min-height: 165px;
            p {
              flex-grow: 1;
            }
          }
          .separator {
            display: none;
          }
        }
      }
    }
  }
`

export default Pagination
