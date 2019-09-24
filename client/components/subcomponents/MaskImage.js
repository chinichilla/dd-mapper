import React, {Component} from 'react'
import {Image, Rect} from 'react-konva'

// modififed from konva
export default class URLImage extends Component {
  state = {
    mask: null
  }
  componentDidMount() {
    this.loadImage()
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage()
    }
  }
  componentWillUnmount() {
    this.mask.removeEventListener('load', this.handleLoad)
  }
  loadImage() {
    this.mask = new window.Image()
    this.mask.src = this.props.src
    this.mask.width = window.innerWidth
    this.mask.height = window.innerHeight
    this.mask.addEventListener('load', this.handleLoad)
  }
  handleLoad = () => {
    this.setState({
      mask: this.mask
    })
  }
  render() {
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        image={this.state.mask}
        ref={node => {
          this.imageNode = node
        }}
      />
      // <Rect
      //   x={0}
      //   y={0}
      //   width={window.innerWidth}
      //   height={window.innerHeight}
      //   fill="pink"
      //   opacity="0.5"
      // />
    )
  }
}
