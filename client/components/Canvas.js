import React, {Component} from 'react'
import '../styles/index.css'

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <canvas />
      </div>
    )
  }
}

export default Canvas
