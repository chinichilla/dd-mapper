import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {TextInput, Button, Label, Switch} from 'react-materialize'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const UploadCardModal = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div>
      <TextInput label="Name" />
      <TextInput label="Description" />
      <TextInput label="Campaign" />
      <div className="row">
        <div className="col s3">
          <span className="center">Mask Visibility</span>
        </div>
        <div className="col s3">
          <div id="maskVisisbility">
            <Switch className="center" offLabel="Off" onLabel="On" />
          </div>
        </div>
        <div className="col s3">
          <span className="center">Grid Visibility</span>
        </div>
        <div className="col s3">
          <div id="gridVisisbility">
            <Switch className="center" offLabel="Off" onLabel="On" />
          </div>
        </div>
      </div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="col s7 push-s5">
            <p>Drop the files here ...</p>
          </div>
        ) : (
          <div className="col s7 push-s5">
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </div>
      <Button>Submit</Button>
    </div>
  )
}

export default UploadCardModal
