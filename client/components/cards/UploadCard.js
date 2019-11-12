import React from 'react'
import {Card, CardTitle, Modal, Button} from 'react-materialize'
// import {Link} from 'react-router-dom'
import UploadCardModal from './UploadCardModal'

/**
 * COMPONENT
 */
const UploadCard = props => {
  const mapImage = props.mapImage
  return (
    <Card
      className="small"
      header={<CardTitle image={mapImage.imageUrl}>Map Title</CardTitle>}
      actions={[
        <div key="uploadMap">
          <Modal
            header="Upload Another Map"
            className="center"
            fixedFooter
            trigger={
              <div className="center">
                <Button
                  className="white-text text-darken-2 color blue"
                  flat
                  waves="light"
                  style={{marginRight: '5px'}}
                >
                  Upload A New Map
                </Button>
              </div>
            }
          >
            <UploadCardModal />
          </Modal>
        </div>
      ]}
    />
  )
}

export default UploadCard
