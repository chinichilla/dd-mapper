import React from 'react'
import {Card, CardTitle} from 'react-materialize'

/**
 * COMPONENT
 */
const MapCard = props => {
  return (
    <Card
      className="small"
      header={<CardTitle image={props.mapImage.imageUrl}>Map Title</CardTitle>}
      actions={[<a href="#">Link to get to map page</a>]}
    >
      Description of the map
    </Card>
  )
}

export default MapCard
