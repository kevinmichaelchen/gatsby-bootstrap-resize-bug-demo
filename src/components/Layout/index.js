import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import withSizes from 'react-sizes'

class Layout extends React.Component {
  componentDidMount() {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { children, width } = this.props

    if (!width && !this.state) {
      console.log('BOTH STATE AND WIDTH ARE NULL')
      return null
    }

    return (
      <div>
        {children}
        <Footer width={width || this.state.width} />
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
