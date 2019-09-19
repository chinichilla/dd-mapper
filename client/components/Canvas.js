import React, {Component} from 'react'
import '../styles/index.css'

export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squareSize: 40,
      canvasSize: {canvasWidth: 800, canvasHeight: 600}
    }
  }

  componentDidMount() {
    const {canvasWidth, canvasHeight} = this.state.canvasSize
    this.canvasSquare.width = canvasWidth
    this.canvasSquare.height = canvasHeight
    this.makeGrid()
  }

  makeGrid() {
    const squareLength = this.state.squareSize
    const rows = this.canvasSquare.height / squareLength
    const columns = this.canvasSquare.width / squareLength
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        this.drawSquare(this.canvasSquare, {
          x: squareLength * j,
          y: squareLength * i
        })
      }
    }
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
    // https://konvajs.org/docs/sandbox/Zooming_Relative_To_Pointer.html -- zoom feature
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
