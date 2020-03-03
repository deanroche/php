import React from "react"
import Image from "../components/image"
import styled from "styled-components"
export const facility = ({ data }) => {
  return (
    <Facility>
      <h2 id="facility">{data.title}</h2>

      <p>{data.mainText.mainText}</p>
      <div className="images">
        {data.images.map((image, index) => (
          <Image
            className={`image image-${index + 1}`}
            key={index}
            image={image}
          />
        ))}
      </div>
    </Facility>
  )
}

const Facility = styled.section`
  padding: 25px;

  h2 {
    text-decoration: underline;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 50px 0;

    font-size: 2.2rem;
  }

  p {
    max-width: 768px;
    margin: 0 auto;
  }

  .images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1440px;
    margin: 0 auto;
  
  }

  @media screen and (min-width: 768px) {
   
    .image img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .image:nth-child(1) {
      max-width: 359px;
      max-height: 359px;
      padding: 5px;
    }
    .image:nth-child(2) {
      max-width: 359px;
      max-height: 359px;
      padding: 5px;
    }
    .image:nth-child(3) {
      max-width: 359px;
      max-height: 450px;
      padding: 5px;
    }
    .image:nth-child(4) {
      max-width: 359px;
      max-height: 450px;
      padding: 5px;
    }
    .image:nth-child(5) {
      max-width: 359px;
      max-height: 359px;
      padding: 5px;
    }
    .image:nth-child(6) {
      max-width: 359px;
      max-height: 359px;
      padding: 5px;
    }
  }

  @media screen and (min-width: 1024px) {
    .image img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .image:nth-child(1) {
      max-width: 324px;
      max-height: 324px;
      padding: 5px;
    }
    .image:nth-child(2) {
      max-width: 324px;
      max-height: 324px;
      padding: 5px;
    }
    .image:nth-child(3) {
      max-width: 324px;
      max-height: 324px;
      padding: 5px;
    }
    .image:nth-child(4) {
      max-width: 974px;
      padding: 5px;
    }
    .image:nth-child(5) {
      max-width: 487px;
      padding: 5px;
    }
    .image:nth-child(6) {
      max-width: 487px;
      padding: 5px;
    }
`

export default facility
