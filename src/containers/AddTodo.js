import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


import Files from 'react-files'
 
class FilesDemo extends React.Component {
  onFilesChange =  function (files) {
    console.log(files)
  };
 
  onFilesError = function (error, file) {
    console.log('error code ' + error.code + ': ' + error.message)
  };
 
  render () {
    return (
      <button className="files">
        <Files
          className='files-dropzone'
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          accepts={['image/png', 'text/plain', 'audio/*']}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Drop files here or click to upload
        </Files>
      </button>
    )
  }
}
 
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
        <FilesDemo/>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
