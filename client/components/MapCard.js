import React from 'react'
import {Card, MediaBox} from 'react-materialize'

/**
 * COMPONENT
 */
const MapCard = props => {
  return (
    <Card
      header={
        <MediaBox>
          {/* make responsive */}
          <img src={props.mapImage.imageUrl} width="200" alt="" />
        </MediaBox>
      }
      actions={[<a key={props.mapImage.id} />]}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  )
}

export default MapCard
