import React from 'react'
import {Card, CardTitle, Button} from 'react-materialize'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const MapCard = props => {
  const mapImage = props.mapImage
  return (
    <Card
      className="small"
      header={<CardTitle image={mapImage.imageUrl}>Map Title</CardTitle>}
      actions={[
        <div key={mapImage.id} className="center">
          <Button
            className="black"
            node="a"
            href={`/maps/${mapImage.id}`}
            flat
            waves="light"
            style={{marginRight: '5px'}}
          >
            Link To Map
          </Button>
        </div>
      ]}
    >
      Description of the map
    </Card>
  )
}

export default MapCard
