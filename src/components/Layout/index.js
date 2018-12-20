import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import withSizes from 'react-sizes'

class Layout extends React.Component {
  render() {
    const { children, width } = this.props

    return (
      <div>
        {children}
        <Footer width={width} />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
}

const mapSizesToProps = ({ width }) => ({ width })

export default withSizes(mapSizesToProps)(Layout)
