import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Canvas} from './Canvas'
import {CanvasKonva} from './CanvasKonva'

// import {MediaBox} from 'react-materialize'
// import snapToGrid from './snapToGrid'
// import {DropTarget} from 'react-dnd'

class SingleMapScreen extends Component {
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
    // fix with redux later
    const mapId = this.props.match.params.mapId
    const mapImage = this.state.allMapImages[mapId - 1]

    return (
      <div>
        {/* <Canvas mapImage={mapImage} /> */}
        <CanvasKonva mapImage={mapImage} />
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

export default connect(mapState)(SingleMapScreen)
