import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import illustration from './../images/404.png';
import '../components/styles/not-found.css';
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title='404' home={true} />
      <div className='not-found'>
        <h1>Whoops!</h1>
        <p>Oh no, nothin' here :( Go on <Link to='/'>home</Link>, get outta here!</p>
          <img src={illustration} alt='Headshot illustration' />
      </div>
    </Layout>
  )
}

export default NotFoundPage
