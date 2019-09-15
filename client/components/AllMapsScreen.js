import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MapCard from './MapCard'
import {Row, Col} from 'react-materialize'

/**
 * COMPONENT
 */

class AllMapsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMapImages: [
        {
          id: 1,
          imageUrl:
            'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
        },
        {
          id: 2,
          imageUrl:
            'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
        },
        {
          id: 3,
          imageUrl:
            'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
        },
        {
          id: 4,
          imageUrl:
            'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
        },
        {
          id: 5,
          imageUrl:
            'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
        }
      ]
    }
  }

  render() {
    const {email} = this.props
    return (
      <div>
        <Row>
          {this.state.allMapImages && (
            <div>
              {this.state.allMapImages.map(mapImage => (
                <div key={mapImage.id}>
                  <Col m={4} s={12}>
                    <MapCard mapImage={mapImage} />
                  </Col>
                </div>
              ))}
            </div>
          )}
        </Row>

        <h3>Welcome, {email}</h3>
        {/* <Button>Click Here</Button> */}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(AllMapsScreen)

/**
 * PROP TYPES
 */
AllMapsScreen.propTypes = {
  email: PropTypes.string
}