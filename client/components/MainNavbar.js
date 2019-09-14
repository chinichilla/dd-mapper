import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar, NavItem} from 'react-materialize'

const MainNavbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Navbar brand={<h1>D&D Mapper</h1>} alignLinks="right">
            <NavItem href="/maps">Maps </NavItem>
            <NavItem href="/upload">Upload</NavItem>
            <NavItem href="#" onClick={handleClick}>
              Logout
            </NavItem>
          </Navbar>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Navbar brand={<h1>D&D Mapper</h1>} alignLinks="right">
            <NavItem href="/login">Login </NavItem>
            <NavItem href="/signup">Sign Up</NavItem>
          </Navbar>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(MainNavbar)

/**
 * PROP TYPES
 */
MainNavbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
