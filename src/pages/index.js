import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroSection from "../components/intro-section"
import WorksSection from "../components/works-section"

export default () => {
  return (
    <Layout>
      <SEO title='Home' home={true} />
      <div className='sidebar'><IntroSection /></div>
      <div className='main-content'>
        <WorksSection />
      </div>
    </Layout>
  )
}
