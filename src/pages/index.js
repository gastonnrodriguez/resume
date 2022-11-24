import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout.js"
import * as styles from '../styles/home.module.css'
export default function Home({data}) {
  //alert(data.site.siteMetadata.title)
  const {title, description} = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
      <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        <div>
          <h2>Design</h2>
          <h3>Algo</h3>
          <p>Lorem ipsum</p>
          <Link className={styles.btn} to="/projects">Projects</Link>
        </div>
        <img src='/rocket.jpg' alt='home banner' style={{maxWidth: '100%'}}/>
        <p>{title} - {description}</p>
      </section>
    </Layout>
  )
}

export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`