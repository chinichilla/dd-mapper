import React, {Component} from 'react'
import {render} from 'react-dom'
import {Stage, Layer, Text} from 'react-konva'
import URLImage from './URLImage'

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
    const imageUrl = this.props.mapImage.imageUrl
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <URLImage src={imageUrl} x={0} y={0} />
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
