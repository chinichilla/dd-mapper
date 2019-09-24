import React, {Component} from 'react'
import {Stage, Layer} from 'react-konva'
import {URLImage, Grid, Player, MaskImage} from './index'

export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerCoords1: {x: 20, y: 40},
      playerCoords2: {x: 20, y: 60},
      playerCoords3: {x: 20, y: 80},
      playerCoords4: {x: 20, y: 100},

      gridLength: 100
    }
  }

  render() {
    const imageUrl = this.props.mapImage.imageUrl
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <URLImage src={imageUrl} x={0} y={0} />
          <MaskImage x={0} y={0} />

          <Grid gridLength={this.state.gridLength} />
          <Player
            playerCoords={this.state.playerCoords1}
            text="Player 1"
            color="purple"
          />
          <Player
            playerCoords={this.state.playerCoords2}
            text="Player 2"
            color="blue"
          />
          <Player
            playerCoords={this.state.playerCoords3}
            text="Player 3"
            color="red"
          />
          <Player
            playerCoords={this.state.playerCoords4}
            text="Player 4"
            color="orange"
          />
        </Layer>
      </Stage>
    )
  }
}
