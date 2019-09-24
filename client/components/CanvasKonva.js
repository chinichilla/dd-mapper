import React, {Component} from 'react'
import {render} from 'react-dom'
import {Stage, Layer, Text, Rect, Line} from 'react-konva'
import URLImage from './URLImage'
import Grid from './Grid'

export class CanvasKonva extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDragging: false,
      player1: {x: 0, y: 10},
      player2: {x: 0, y: 30},
      gridLength: 50
    }
  }

  render() {
    const imageUrl = this.props.mapImage.imageUrl
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <URLImage src={imageUrl} x={0} y={0} />
          <Grid gridLength={this.state.gridLength} />
          {/* <Rect
            x={0}
            y={0}
            width={window.innerWidth}
            height={window.innerHeight}
            fill="gray"
            opacity="0.75"
          /> */}
          <Text
            text="Player 1"
            x={this.state.player1.x}
            y={this.state.player1.y}
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
          <Text
            text="Player 2"
            x={this.state.player2.x}
            y={this.state.player2.y}
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
