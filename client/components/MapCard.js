import React from 'react'
import {Row, Col, Card, CardTitle} from 'react-materialize'

/**
 * COMPONENT
 */
const MapCard = props => {
  return (
    <Row>
      <Col m={6} s={12}>
        <Card header={<CardTitle />} actions={[<a />]}>
          Here is the standard card with an image thumbnail.
        </Card>
      </Col>
    </Row>
  )
}

export default MapCard
