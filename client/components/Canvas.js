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
    this.canvasFootprint.width = canvasWidth
    this.canvasFootprint.height = canvasHeight
    this.makeMapWithGrid()
  }

  makeMapWithGrid() {
    this.drawBackground() // make backgroundMap layer
    // this.makeGrid() // make gridLayer
    // make obscuredView Layer and convert into separate image for later
  }

  drawBackground() {
    const backgroundMap = new Image()
    const ctx = this.canvasFootprint.getContext('2d')

    backgroundMap.src = this.props.mapImage.imageUrl
    const canvasWidth = this.state.canvasSize.canvasWidth
    const canvasHeight = this.state.canvasSize.canvasHeight
    backgroundMap.onload = function() {
      ctx.drawImage(
        backgroundMap,
        0,
        0,
        backgroundMap.width,
        backgroundMap.height,
        0,
        0,
        canvasWidth,
        canvasHeight
      )
    }
  }

  // makeGrid() {
  //   const squareLength = this.state.squareSize
  //   const rows = this.canvasFootprint.height / squareLength
  //   const columns = this.canvasFootprint.width / squareLength

  //   for (let i = 0; i < rows; i++) {
  //     for (let j = 0; j < columns; j++) {
  //       this.drawSquare(this.canvasFootprint, {
  //         x: squareLength * j,
  //         y: squareLength * i
  //       })
  //     }
  //   }
  // }

  // drawSquare(canvasId, coordinates) {
  //   const ctx = canvasId.getContext('2d', {alpha: false})
  //   ctx.beginPath()
  //   ctx.rect(
  //     coordinates.x,
  //     coordinates.y,
  //     this.state.squareSize,
  //     this.state.squareSize
  //   )
  //   ctx.stroke()
  //   ctx.closePath()
  // }

  render() {
    console.log(this.props.mapImage.imageUrl)
    return (
      <div>
        <canvas
          id="mapBackground"
          ref={canvasFootprint => (this.canvasFootprint = canvasFootprint)}
          width={this.state.canvasWidth}
          height={this.state.canvasHeight}
        />
      </div>
    )
  }
}
