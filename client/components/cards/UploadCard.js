import React from 'react'
import {Card, CardTitle} from 'react-materialize'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const UploadCard = props => {
  const mapImage = props.mapImage
  return (
    <Card
      className="small"
      // header={<CardTitle image={mapImage.imageUrl}>Map Title</CardTitle>}
      actions={[
        <a href={`/maps/${mapImage.id}`} key={mapImage.id}>
          Upload A New Map
        </a>
      ]}
    />
  )
}

export default UploadCard
