import React from 'react'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes'
import Footer from './Footer'

// Returns the sorted values of a map of strings to numbers
function sortMapValues(o) {
  return Object.values(o).sort((aa, bb) => {
    let a = typeof aa === 'string' ? parseInt(aa, 10) : aa
    let b = typeof bb === 'string' ? parseInt(bb, 10) : bb
    return a === b ? 0 : a < b ? -1 : 1
  })
}

function computeMediaType({ width, breakpoints }) {
  if (!breakpoints) return ''
  // Reverses keys and values (i.e., {1:2} becomes {2:1}
  // Maps breakpoint values to media-type strings
  let mediaTypes = Object.entries(breakpoints).reduce((obj, item) => {
    let key = item[0]
    let value = item[1]
    obj[value] = `${key}`
    return obj
  }, {})
  // array of breakpoint int values, sorted lowest to greatest
  let sortedBreakpointValues = sortMapValues(breakpoints)
  for (let i = 0; i < sortedBreakpointValues.length; i++) {
    let breakpoint = sortedBreakpointValues[i]
    let mediaType = mediaTypes[breakpoint]
    if (width < breakpoint) {
      return mediaType
    }
  }
  // Return no CSS class (empty string) if nothing matches
  return ''
}

class Layout extends React.Component {
  render() {
    const {
      helmetProps,
      breakpoints,
      locale,
      children,
      widthInfo,
      width,
    } = this.props
    const footerMediaType = computeMediaType({
      width,
      breakpoints: {
        tiny: 320,
        extraSmall: 480,
        small: 768,
        medium: 992,
        large: 1200,
      },
    })
    const widthClass = breakpoints
      ? computeMediaType({ width, breakpoints })
      : ''
    const newChildrenProps = {
      widthClass,
      width,
    }
    console.log('width =', width)
    console.log('widthClass =', widthClass)

    return (
      <div>
        <div>{React.cloneElement(children, newChildrenProps)}</div>
        <Footer mediaType={footerMediaType} />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  helmetProps: PropTypes.shape({}),
  breakpoints: PropTypes.shape({}),
}

const mapSizesToProps = ({ width }) => ({ width })

export default withSizes(mapSizesToProps)(Layout)
