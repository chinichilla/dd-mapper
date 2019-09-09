import React, {Component} from 'react'
import axios from 'axios'

class MapUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapFile: null
    }
    this.onFileSubmit = this.onFileSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  async onFileSubmit(event) {
    try {
      event.preventDefault()
      const mapData = new FormData()
      mapData.append('mapFile', this.state.mapFile)
      await axios.post('/upload', mapData)
      this.setState({mapFile: null})
    } catch (error) {
      console.error()
    }
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onFileSubmit}>
        <h1>Map Upload</h1>
        <input type="file" name="mapFile" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    )
  }
}

export default MapUpload
