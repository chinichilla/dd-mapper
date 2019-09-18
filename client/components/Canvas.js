import React, {Component} from 'react'
import '../styles/index.css'

export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squareSize: 20,
      canvasSize: {canvasWidth: 800, canvasHeight: 600}
    }
  }

  componentDidMount() {
    const {canvasWidth, canvasHeight} = this.state.canvasSize
    this.canvasSquare.width = canvasWidth
    this.canvasSquare.height = canvasHeight
    this.drawSquare(this.canvasSquare, {x: 50, y: 50})
  }

  drawSquare(canvasID, coordinates) {
    const ctx = canvasID.getContext('2d')
    ctx.beginPath()
    ctx.rect(
      coordinates.x,
      coordinates.y,
      this.state.squareSize,
      this.state.squareSize
    )
    ctx.stroke()
    ctx.closePath()
  }

  render() {
    console.log(this.props.mapImage.imageUrl)
    return (
      <div>
        <canvas
          ref={canvasSquare => (this.canvasSquare = canvasSquare)}
          width={this.state.canvasWidth}
          height={this.state.canvasHeight}
        >
          {/* <img
            src={this.props.mapImage.imageUrl}
            width={this.state.canvasWidth}
            height={this.state.canvsHeight}
          /> */}
        </canvas>
      </div>
    )
  }
}
