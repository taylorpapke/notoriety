import React from "react"
import Button from "../Button/Button"
import "./FileUploader.css"

const FileUploader = ({ title, fieldName, value, uploadHandler }) => {
  const hiddenFileInput = React.useRef(null)
  
  const handleClick = event => {
    hiddenFileInput.current.click()
  }

  const handleChange = (event) => {
    uploadHandler(event)
  }

  return (
    <div className="upload-container">
      <h3>{title}</h3>
      <Button buttonStyle="primary" onClickHandler={handleClick}>
        Select
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        name={fieldName}
        id={fieldName}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default FileUploader
