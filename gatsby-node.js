const path = require("path")
const _ = require("lodash")
const slugify = require("./src/util/utilityFunctions").slugify

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Need to do.. create a coach page / class page

  const templates = {
    classPage: path.resolve("./src/templates/class-page.js"),
    coachPage: path.resolve("./src/templates/coach-page.js"),
    blogPost: path.resolve("./src/templates/blog-page.js"),
    tagsPage: path.resolve("./src/templates/tags-page.js"),
    tagPosts: path.resolve("./src/templates/tag-posts.js"),
    postList: path.resolve("./src/templates/post-list.js"),
    catPosts: path.resolve("./src/templates/cat-posts.js"),
    catPage: path.resolve("./src/templates/cat-page.js"),
  }

  const response = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            tags
            category
          }
        }
      }
      allContentfulClass {
        edges {
          node {
            name
            description {
              json
            }
          }
        }
      }
      allContentfulCoach {
        edges {
          node {
            name
            title
            bio {
              json
            }
            image {
              fixed {
                src
              }
            }
            twitter
            instagram
          }
        }
      }
    }
  `)

  const posts = response.data.allContentfulBlogPost.edges
  //  const classes = response.data.allContentfulClass.edges
  //  const coaches = response.data.allContentfulCoach.edges

  // Create class pages
  // classes.forEach(edge => {
  //   const slug = slugify(edge.node.name)
  //   const name = edge.node.name
  //   const desc = edge.node.description.json
  //   createPage({
  //     component: templates.classPage,
  //     path: `/class/${slug}`,
  //     context: {
  //       name,
  //       slug,
  //       desc,
  //     },
  //   })
  // })

  // Create coaches pages
  // coaches.forEach(edge => {
  //   const slug = slugify(edge.node.name)
  //   const name = edge.node.name
  //   const title = edge.node.title
  //   const bio = edge.node.bio.json
  //   const image = edge.node.image
  //   const twitter = edge.node.twitter
  //   const instagram = edge.node.instagram
  //   createPage({
  //     component: templates.coachPage,
  //     path: `/coach/${slug}`,
  //     context: {
  //       name,
  //       title,
  //       slug,
  //       bio,
  //       image,
  //       twitter,
  //       instagram,
  //     },
  //   })
  // })

  // Create blog posts
  posts.forEach((edge, index) => {
    const slug = slugify(edge.node.title)
    const title = edge.node.title
    const category = edge.node.category
    const previous = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node
    createPage({
      component: templates.blogPost,
      path: `/blog/${slug}`,
      context: {
        category,
        slug,
        previous,
        next,
        title,
      },
    })
  })

  // Tags

  let tags = []
  _.each(posts, edge => {
    if (_.get(edge, "node.tags")) {
      tags = tags.concat(edge.node.tags)
    }
  })

  let tagPostCounts = {}
  tags.forEach(tag => {
    tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
  })

  tags = _.uniq(tags)
  // This creates its own page for tags, include in the above createPage to seperate them (for a side bar etc).
  createPage({
    path: `/tags`,
    component: templates.tagsPage,
    context: {
      tags,
      tagPostCounts,
    },
  })

  tags.forEach(tag => {
    createPage({
      path: `/tag/${slugify(tag)}`,
      component: templates.tagPosts,
      context: {
        tag,
      },
    })
  })

  // Categories | YOU ALSO NEED TO SEND OVER THE CORRESPONDING SLUG

  let categories = []

  _.each(posts, edge => {
    if (_.get(edge, "node.category")) {
      categories = categories.concat(edge.node.category)
    }
  })

  let categoriesCount = {}
  categories.forEach(category => {
    categoriesCount[category] = (categoriesCount[category] || 0) + 1
  })

  categories = _.uniq(categories)

  // This creates its own page for tags, include in the above createPage to seperate them (for a side bar etc).

  createPage({
    path: `/categories`,
    component: templates.catPage,
    context: {
      categories,
      categoriesCount,
    },
  })

  categories.forEach(cat => {
    createPage({
      path: `/category/${slugify(cat)}`,
      component: templates.catPosts,
      context: {
        cat,
      },
    })
  })

  // Pagination

  const postsPerPage = 12
  const numberOfPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const isFirstPage = index === 0
    const currentPage = index + 1
    if (isFirstPage) return
    createPage({
      path: `blog/${currentPage}`,
      component: templates.postList,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage,
        numberOfPages,
      },
    })
  })
}
