import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundView = props => {
  console.log('Not Found props =', props)
  return (
    <div>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  )
}

export default props => (
  <Layout>
    <NotFoundView {...props} />
  </Layout>
)
