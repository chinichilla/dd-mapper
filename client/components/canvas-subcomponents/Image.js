import React, {Fragment} from 'react'
import {Image, Transformer} from 'react-konva'
import useImage from 'use-image'
const Img = ({shapeProps, isSelected, onSelect, onChange, imageUrl}) => {
  const shapeRef = React.useRef()
  const trRef = React.useRef()
  const [image] = useImage(imageUrl)
  React.useEffect(
    () => {
      if (isSelected) {
        // we need to attach transformer manually
        trRef.current.setNode(shapeRef.current)
        trRef.current.getLayer().batchDraw()
      }
    },
    [isSelected]
  )
  return (
    <Fragment>
      <Image
        onClick={onSelect}
        image={image}
        ref={shapeRef}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          })
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </Fragment>
  )
}
export default Img
