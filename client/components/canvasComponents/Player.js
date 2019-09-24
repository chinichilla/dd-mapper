import React, {Component} from 'react'
import {Text} from 'react-konva'

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDragging: false,
      player: {x: this.props.playerCoords.x, y: this.props.playerCoords.y}
    }
  }

  render() {
    return (
      <Text
        text={this.props.text}
        x={this.state.player.x}
        y={this.state.player.y}
        draggable
        fill={this.state.isDragging ? 'black' : this.props.color}
        onDragStart={() => {
          this.setState({
            isDragging: true
          })
        }}
        onDragEnd={e => {
          this.setState({
            isDragging: false,
            player: {
              x: e.target.x(),
              y: e.target.y()
            }
          })
        }}
      />
    )
  }
}
