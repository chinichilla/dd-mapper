import React, {Component} from 'react'
import {Stage, Layer} from 'react-konva'
import {URLImage, Grid, Player, MaskImage} from '../'

export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerCoords1: {x: 40, y: 50},
      playerCoords2: {x: 40, y: 70},
      playerCoords3: {x: 40, y: 90},
      playerCoords4: {x: 40, y: 110},
      playerCoords5: {x: 40, y: 130},

      gridLength: 100
    }
  }

  render() {
    const imageUrl = this.props.mapImage.imageUrl
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <URLImage src={imageUrl} x={0} y={0} />
          <MaskImage
            src="https://i.ytimg.com/vi/U1TbSk2il24/maxresdefault.jpg"
            x={0}
            y={0}
          />

          <Grid gridLength={this.state.gridLength} />
          <Player
            playerCoords={this.state.playerCoords1}
            text="Player 1"
            color="#9C4EE0"
          />
          <Player
            playerCoords={this.state.playerCoords2}
            text="Player 2"
            color="#D01AB1"
          />
          <Player
            playerCoords={this.state.playerCoords3}
            text="Player 3"
            color="#3F86E0"
          />
          <Player
            playerCoords={this.state.playerCoords4}
            text="Player 4"
            color="#33FFA7"
          />
          <Player
            playerCoords={this.state.playerCoords5}
            text="Player 5"
            color="#33FFF4"
          />
        </Layer>
      </Stage>
    )
  }
}
