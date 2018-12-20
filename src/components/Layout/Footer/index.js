import React from 'react'
import { Link } from 'gatsby'
import LatestUpdates from './LatestUpdates'
import './GlobalFooter.global.scss'

class GlobalFooter extends React.PureComponent {
  render() {
    const { mediaType } = this.props

    const Products = () => (
      <div>
        <p className="header">Products</p>
        <p>
          <Link to="/prospect">Prospect</Link>
        </p>
        <p>
          <Link to="/scope">Scope</Link>
        </p>
        <p>
          <Link to="/pricing">Pricing</Link>
        </p>
      </div>
    )

    const Learn = () => (
      <div>
        <p className="header">Learn</p>
        <p>
          <a
            href="https://help.irisvr.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help & FAQ
          </a>
        </p>
        <p>
          <a
            href="https://help.irisvr.com/hc/en-us/community/topics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forums
          </a>
        </p>
        <p>
          <a
            href="http://blog.irisvr.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </p>
      </div>
    )

    const Industry = () => (
      <div>
        <p className="header">Industry</p>
        <p>
          <Link to="/industry/architecture">Architecture</Link>
        </p>
        <p>
          <Link to="/industry/construction">Construction</Link>
        </p>
        <p>
          <Link to="/industry/engineering">Engineering</Link>
        </p>
        <p>
          <Link to="/industry/educators">Educators</Link>
        </p>
        <p>
          <Link to="/industry/students">Students</Link>
        </p>
      </div>
    )

    const Company = () => (
      <div>
        <p className="header">Company</p>
        <p>
          <Link to="/jobs">Careers</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    )

    const ReferenceMaterials = () => (
      <div>
        <p className="header">Reference Materials</p>
        <p>
          <a
            href="https://learn.irisvr.com/hardware/vr-hardware/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VR Hardware
          </a>
        </p>
        <p>
          <a
            href="https://learn.irisvr.com/hardware/ar-hardware/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AR Hardware
          </a>
        </p>
        <p>
          <a
            href="https://learn.irisvr.com/hardware/mr-hardware/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MR Hardware
          </a>
        </p>
        <p>
          <a
            href="https://learn.irisvr.com/integrations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Integrations
          </a>
        </p>
      </div>
    )

    const Terms = ({ width }) => (
      <div className={`copyright ${width}`}>
        <hr />
        <p className="terms">
          <Link to="/terms">Terms</Link> –{' '}
          <Link to="/privacy">Privacy Policy</Link> –{' '}
          <Link to="/cookies-policy">Cookies Policy</Link>
        </p>
        <p>
          A special thanks to Corgan Architects and Ennead Architects for use of
          their offices for photography.
        </p>
        <p>Copyright 2018 IrisVR, Inc. All rights reserved.</p>
        <p>3 W 18th Street, 2nd Floor, New York, NY 10011</p>
      </div>
    )

    return (
      <div id="footer">
        {(() => {
          switch (mediaType) {
            case 'tiny':
            case 'extraSmall':
            case 'small':
              return (
                <div className="col-xs-12">
                  <div className="sitemap col-xs-12">
                    <div className="column col-xs-6">
                      <div className="group">
                        <Products />
                      </div>
                      <div className="group">
                        <Industry />
                      </div>
                      <div className="group">
                        <Company />
                      </div>
                    </div>
                    <div className="column col-xs-6">
                      <div className="group">
                        <Learn />
                      </div>
                      <div className="group">
                        <ReferenceMaterials />
                      </div>
                    </div>
                  </div>
                  <div className="sitemap col-xs-12">
                    <div className="updates updates-xs column">
                      <LatestUpdates />
                    </div>
                  </div>
                  <Terms width="col-xs-12 xs" />
                </div>
              )
            case 'medium':
            case 'large':
              return (
                <div className="col-md-12 col-sm-12">
                  <div className="sitemap col-md-12 col-sm-12">
                    <div className="column col-md-4 col-sm-4">
                      <div className="group">
                        <Products />
                      </div>
                    </div>
                    <div className="column col-md-4 col-sm-4">
                      <Industry />
                    </div>
                    <div className="column col-md-4 col-sm-4">
                      <Learn />
                    </div>
                  </div>
                  <div className="sitemap col-md-12 col-sm-12">
                    <div className="column col-md-4 col-sm-4">
                      <Company />
                    </div>
                    <div className="column col-md-4 col-sm-4">
                      <ReferenceMaterials />
                    </div>
                    <div className="column col-md-4 col-sm-4">
                      <LatestUpdates />
                    </div>
                  </div>
                  <Terms width="col-md-12 col-sm-12" />
                </div>
              )
            default:
              return (
                <div className="col-lg-12">
                  <div className="sitemap col-lg-9">
                    <div className="column col-lg-3">
                      <div className="group">
                        <Products />
                      </div>
                      <div className="group">
                        <Company />
                      </div>
                    </div>
                    <div className="column col-lg-3">
                      <Industry />
                    </div>
                    <div className="column col-lg-3">
                      <Learn />
                    </div>
                    <div className="column col-lg-3">
                      <ReferenceMaterials />
                    </div>
                  </div>
                  <div className="updates col-lg-3 updates-md">
                    <LatestUpdates />
                  </div>
                  <Terms width="col-lg-12" />
                </div>
              )
          }
        })()}
      </div>
    )
  }
}

export default GlobalFooter
