import React from 'react'
import PropTypes from 'prop-types'

/**
 * Sign up form section of Global footer
 *
 * @param {Object} props Properties for this component
 * @param {Function} props.handleChange Trigger on change of input
 * @param {Function} props.signup Complete signup
 * @param {string} props.activeClass CSS class when active
 * @param {string} props.inputDivClass CSS class to apply to input div
 *
 * @returns {React.Component} Signup Form React component
 */
const SignupForm = ({
  handleChange,
  value,
  signup,
  activeClass,
  inputDivClass,
  errorClass,
  submitted,
}) => (
  <div className={`input-div ${inputDivClass} ${errorClass}`}>
    <input
      type="text"
      placeholder="youremail@example.com"
      value={value}
      onChange={handleChange}
      disabled={submitted}
    />
    <i
      className={`material-icons ${activeClass}`}
      onClick={submitted ? null : signup}
    >
      {submitted ? 'done' : 'arrow_forward'}
    </i>
  </div>
)

SignupForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  signup: PropTypes.func.isRequired,
  activeClass: PropTypes.string.isRequired,
  inputDivClass: PropTypes.string.isRequired,
  errorClass: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
}

export default SignupForm
