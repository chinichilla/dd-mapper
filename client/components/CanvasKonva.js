import React, {Component} from 'react'
import {render} from 'react-dom'
import {Stage, Layer, Text, Image} from 'react-konva'
import useImage from 'use-image'

export class CanvasKonva extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDragging: false,
      x: 0,
      y: 0
    }
  }

  render() {
    const resizedImage = this.props.mapImage.imageUrl
    const MapImage = () => {
      const [image] = useImage(resizedImage)
      return <Image image={image} />
    }

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <MapImage />

          <Text
            text="Draggable Text"
            x={this.state.x}
            y={this.state.y}
            draggable
            fill={this.state.isDragging ? 'green' : 'black'}
            onDragStart={() => {
              this.setState({
                isDragging: true
              })
            }}
            onDragEnd={e => {
              this.setState({
                isDragging: false,
                x: e.target.x(),
                y: e.target.y()
              })
            }}
          />
        </Layer>
      </Stage>
    )
  }
}
