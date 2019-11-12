import React, {useState} from 'react'
import {connect} from 'react-redux'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
// import "./SingleMapPage.css";
import {Stage, Layer} from 'react-konva'
import {
  Grid,
  Image,
  MapBackground,
  MaskLayer,
  addTextNode,
  addLine
} from '../index'

const uuidv1 = require('uuid/v1')

function SingleMapScreen(props) {
  const [maskVisible, toggleMask] = useState(false)

  const [images, setImages] = useState([])
  const [imageWidth] = useState(window.innerWidth * 0.99)
  const [imageHeight] = useState(window.innerHeight * 0.97)

  const [mapBackground] = useState(
    'https://i.pinimg.com/originals/82/be/43/82be43d9868aa144ec6de0b7d5268aef.jpg'
  )

  const [selectedId, selectShape] = useState(null)
  const [gridVisible, toggleGrid] = useState(false)

  const [shapes, setShapes] = useState([])
  const [, updateState] = React.useState()

  const stageEl = React.createRef()
  const layerEl = React.createRef()
  const layerMap = React.createRef()
  const fileUploadEl = React.createRef()

  const drawLine = () => {
    addLine(stageEl.current.getStage(), layerEl.current)
  }

  const eraseLine = () => {
    addLine(stageEl.current.getStage(), layerEl.current, 'erase')
  }

  const drawText = () => {
    const id = addTextNode(stageEl.current.getStage(), layerEl.current)
    const shs = shapes.concat([id])
    setShapes(shs)
  }

  const drawImage = () => {
    fileUploadEl.current.click()
  }

  const forceUpdate = React.useCallback(() => updateState({}), [])
  const fileChange = ev => {
    let file = ev.target.files[0]
    let reader = new FileReader()
    reader.addEventListener(
      'load',
      () => {
        const id = uuidv1()
        images.push({
          content: reader.result,
          id
        })
        setImages(images)
        fileUploadEl.current.value = null
        shapes.push(id)
        setShapes(shapes)
        forceUpdate()
      },
      false
    )
    if (file) {
      reader.readAsDataURL(file)
    }
  }

  document.addEventListener('keydown', ev => {
    if (ev.code == 'Delete') {
      let index = images.findIndex(r => r.id == selectedId)
      if (index != -1) {
        images.splice(index, 1)
        setImages(images)
      }
      forceUpdate()
    }
  })

  return (
    <div className="home-page">
      <ButtonGroup className="center">
        <Button variant="secondary" onClick={() => toggleGrid(!gridVisible)}>
          Grid
        </Button>
        <Button variant="secondary" onClick={() => toggleMask(!maskVisible)}>
          Mask
        </Button>
        <Button variant="secondary" onClick={drawLine}>
          Draw
        </Button>
        <Button variant="secondary" onClick={eraseLine}>
          Erase
        </Button>
        <Button variant="secondary" onClick={drawText}>
          Player Text{' '}
        </Button>
        <Button variant="secondary" onClick={drawImage}>
          Player Icon
        </Button>
      </ButtonGroup>
      <input
        style={{display: 'none'}}
        type="file"
        ref={fileUploadEl}
        onChange={fileChange}
      />
      <Stage
        width={imageWidth}
        height={imageHeight}
        ref={stageEl}
        onMouseDown={e => {
          // deselect when clicked on empty area
          const clickedOnEmpty = e.target === e.target.getStage()
          if (clickedOnEmpty) {
            selectShape(null)
          }
        }}
      >
        <Layer ref={layerMap}>
          <MapBackground
            imageUrl={mapBackground}
            width={imageWidth}
            height={imageHeight}
          />
        </Layer>
        <Layer ref={layerEl}>
          {maskVisible && <MaskLayer width={imageWidth} height={imageHeight} />}
          {images.map((image, i) => {
            return (
              <Image
                key={`image${i}`}
                imageUrl={image.content}
                isSelected={image.id === selectedId}
                onSelect={() => {
                  selectShape(image.id)
                }}
                onChange={newAttrs => {
                  const imgs = images.slice()
                  imgs[i] = newAttrs
                }}
              />
            )
          })}
        </Layer>
        <Layer>{gridVisible && <Grid />}</Layer>
      </Stage>
    </div>
  )
}

// class SingleMapScreen extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       allMapImages: [
//         {
//           id: 1,
//           imageUrl:
//             'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
//         },
//         {
//           id: 2,
//           imageUrl:
//             'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
//         },
//         {
//           id: 3,
//           imageUrl:
//             'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
//         },
//         {
//           id: 4,
//           imageUrl:
//             'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
//         },
//         {
//           id: 5,
//           imageUrl:
//             'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
//         }
//       ]
//     }
//   }

//   render() {
//     // fix with redux later
//     const mapId = this.props.match.params.mapId
//     const mapImage = this.state.allMapImages[mapId - 1]

//     return (
//       <div>
//         <h1>hi</h1>
//       </div>
//     )
//   }
// }

const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(SingleMapScreen)
