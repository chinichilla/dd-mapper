import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Form, Button, Checkbox} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const MapUpload = props => {
  const {email} = props

  return (
    <div>
      <h3>Map {email}</h3>
      <Button>Click Here</Button>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(MapUpload)

/**
 * PROP TYPES
 */
MapUpload.propTypes = {
  email: PropTypes.string
}
