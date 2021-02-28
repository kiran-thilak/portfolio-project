import React from "react"
import { useStaticQuerry, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  return (
    <section className="hero is-danger is-fullheight">
      <div className="ks_hero-bg-container">
        <div className="ks_hero">
          <div className="ks_hero-bg-text">KS</div>
        </div>
      </div>
      <div className="hero-body">
        <div className="">
          <p className="ks_title title">Karthik Satheesh</p>
          <p className="ks_subtitle subtitle">
            Automotive Designer/Illustrator
          </p>
          <div className="columns">
            <p className="column ks_summary is-two-thirds">
              "Artistically skilled and creatively gifted engineering graduate
              with a post-graduate degree in Transport Design. Comprehensive
              experience of 13 years in designing holding solid team building,
              sketching and concept development skills. Looking forward to build
              a career in the field of product design and development around a
              dynamic and challenging environment with myriad learning
              opportunities"
            </p>
          </div>
          <p className="ks_email">
            Email: karthiksatheesh@gmail.com
            <br /> Phone: +919446682277
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner
