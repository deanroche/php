import React from "react"
import {
  FiTwitter,
  FiInstagram,
  FiShare2,
  FiFacebook,
  FiLink,
} from "react-icons/fi"
const share = ({ url, location }) => {
  return (
    <section>
      <h2>Share this post</h2>
      <div>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}${location}`}
          title="Share to Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
          Facebook
        </a>

        <a
          href={`https://twitter.com/intent/tweet/?text=Check this out!&url=${url}${location}`}
          title="Share to Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
          Twitter
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}${location}&title=&summary=&source=`}
          title="Share to LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default share
