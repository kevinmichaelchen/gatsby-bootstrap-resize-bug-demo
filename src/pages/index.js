import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const IndexView = props => {
  return (
    <div>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <h1>Hi people</h1>
    </div>
  )
}

export default props => (
  <Layout>
    <IndexView {...props} />
  </Layout>
)
