import React from "react"
import { graphql, Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"

import Image from "../components/image"
import GA from "../components/ga"

// Components
import Newsletter from "../components/newsletter"

import Layout from "../components/layout"
import SEO from "../SEO"
import Hero from "../components/blog/hero"
import Body from "../components/blog/body"
import Tags from "../components/blog/tags"
import Author from "../components/blog/author"
import Navigation from "../components/blog/navigation"
//import Categories from "../components/blog/categories"

import styled from "styled-components"
export const query = graphql`
  query($title: String!) {
    contentfulBlogPost(title: { eq: $title }) {
      title
      publishDate(formatString: "MMMM D, YYYY")
      tags
      category
      description
      coach {
        name
        title
        bio {
          json
        }
        image {
          fluid {
            src
            srcSet
            srcSetWebp
          }
        }
        twitter
        instagram
      }
      image {
        title
        description
        fluid {
          src
          srcSet
          srcWebp
        }
      }
      body {
        json
      }
    }
  }
`

// Add in when more than 1 post

// relatedPosts {
//   title
//   image {
//     title
//     description
//     fluid {
//       src
//       srcSet
//       srcWebp
//     }
//   }
// }

const Blog = props => {
  // SEO info for each post.
  const seo = {
    title: `Blog | ${props.data.contentfulBlogPost.title}`,
    description: props.data.contentfulBlogPost.description,
    tags: props.data.contentfulBlogPost.tags,
  }

  // Specific post details including title, date, category,
  // description, tags and hero image.

  const post = {
    title: props.data.contentfulBlogPost.title,
    date: props.data.contentfulBlogPost.publishDate,
    category: props.data.contentfulBlogPost.category,
    description: props.data.contentfulBlogPost.description,
    tags: props.data.contentfulBlogPost.tags,
    heroImage: props.data.contentfulBlogPost.image,
  }

  // Author information for each post.
  const author = {
    name: props.data.contentfulBlogPost.coach.name,
    title: props.data.contentfulBlogPost.coach.title,
    image: props.data.contentfulBlogPost.coach.image,
    twitter: props.data.contentfulBlogPost.coach.twitter,
    instagram: props.data.contentfulBlogPost.coach.instagram,
  }

  // Post navigation: This code builds an object based on the
  // next / previous posts. We do a check to make sure there
  // is a post before creating.

  let navigation = {}

  if (props.pageContext.previous) {
    navigation.previous = props.pageContext.previous
    navigation.previousTitle = props.pageContext.previous.title
  }

  if (props.pageContext.next) {
    navigation.next = props.pageContext.next
    navigation.nextTitle = props.pageContext.next.title
  }

  return (
    <Layout dark={true}>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.tags}
      />
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 601"
        style={{ top: `112px` }}
      >
        <polygon
          className="cls-1"
          fill="#333"
          points="0 601 1920 108 1920 0 0 0 0 601"
        ></polygon>
      </svg>
      <Post>
        <div className="details">
          <p>
            {post.date} -{" "}
            <Link to={`/category/${slugify(post.category)}`}>
              {post.category}
            </Link>
          </p>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>

        <Hero heroImage={post.heroImage} />
        <div className="content">
          <Body body={props.data.contentfulBlogPost.body.json} />
          <Author
            name={author.name}
            title={author.title}
            image={author.image}
            twitter={author.twitter}
            instagram={author.instagram}
            linkedIn={author.linkedIn}
            website={author.website}
            slug={slugify(props.data.contentfulBlogPost.title)}
          />
        </div>
        <Navigation navigation={navigation} />
        <Tags tags={post.tags} />
        {/* <Categories /> */}
      </Post>
      {/* <Related>
        <h3>Related Posts</h3>
        <div className="posts">
          {props.data.contentfulBlogPost.relatedPosts.map((post, index) => (
            <div className="related-post" key={index}>
              <Link to={`/blog/${slugify(post.title)}`}>
                <Image image={post.image} />
                <h5>{post.title}</h5>
              </Link>
            </div>
          ))}
        </div>
      </Related> */}
      <Newsletter
        data={{
          title: "Enjoyed this post?",
          mainText: {
            mainText:
              "Sign-up to our newsletter to be informed when we post something new!",
          },
        }}
      />
      <GA page={`blog/${slugify(post.title)}`} />
    </Layout>
  )
}

const Related = styled.div`
  padding: 25px;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .posts {
    display: flex;
    flex-direction: column;
    .related-post {
      width: 100%;
      img {
        max-height: 250px;
        height: 250px;
        object-fit: cover;
      }
    }
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      .related-post {
        width: 30%;
        img {
          max-height: 250px;
          height: 250px;
          object-fit: cover;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`

const Post = styled.section`
  padding: 150px 25px 25px 25px;

  .details {
    max-width: 768px;
    margin: 0 auto;
    text-align: center;
    a {
      text-decoration: underline;
    }
  }

  .content {
    position: relative;
    h4 {
      margin: 10px 0 15px 0;
    }

    div:last-child {
      display: flex;
      margin: 0 0 25px 0;
    }

    @media screen and (min-width: 768px) {
      ::after {
        content: " ";
        position: absolute;
        bottom: 0;
        display: block;
        border-bottom: 2px solid #dedede;
        width: 100%;
        margin: 25px auto;
      }
    }
  }

  img {
    max-height: 50vh;
    object-fit: cover;
  }

  @media screen and (min-width: 1024px) {
    img {
      display: block;
      max-height: 80vh;
      max-width: 1024px;
      margin: 50px auto;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      max-width: 1024px;
      margin: 0 auto;
      div:nth-child(1) {
        width: 70%;
      }
      div:nth-child(2) {
        width: 25%;
      }
      img {
        margin: 0 auto;
      }
    }
  }
`

export default Blog
