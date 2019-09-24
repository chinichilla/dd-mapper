import React, {Component} from 'react'
import {Stage, Layer} from 'react-konva'
import {URLImage, Grid, Player, MaskImage} from '../'

export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [
        {key: 1, coords: {x: 40, y: 50}, text: 'Player 1', color: '#9C4EE0'},
        {key: 2, coords: {x: 40, y: 70}, text: 'Player 2', color: '#D01AB1'},
        {key: 3, coords: {x: 40, y: 90}, text: 'Player 3', color: '#94290F'},
        {key: 4, coords: {x: 40, y: 110}, text: 'Player 4', color: '#33FFA7'},
        {key: 5, coords: {x: 40, y: 130}, text: 'Player 5', color: '#33FFF4'},
        {key: 6, coords: {x: 40, y: 150}, text: 'Player 6', color: '#F47F16'}
      ],
      gridLength: 90
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
          {this.state.players.map(player => (
            <Player
              key={player.key}
              coords={player.coords}
              text={player.text}
              color={player.color}
            />
          ))}
        </Layer>
      </Stage>
    )
  }
}
