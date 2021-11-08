import React from "react"
import { Formik } from "formik"
import "./CreateCard.css"
import Button from "../Button/Button"
import FileUploader from "../FileUploader/FileUploader"

const CreateCard = () => {
  // setField to handle files, see https://hackernoon.com/formik-handling-files-and-recaptcha-209cbeae10bc
  return (
    <Formik
      initialValues={{
        frontText: "add front of card",
        frontImage: "",
        backText: "back of card",
        backImage: "",
      }}
      onChange={() => {
        console.log("changing!")
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {(formProps) => (
        <form onSubmit={formProps.onSubmit} className="form-container">
          <h3>Front Text</h3>
          <textarea
            name="frontText"
            className="textarea"
            value={formProps.values.frontText}
            onChange={formProps.onChange}
          />
          <FileUploader
            title="Front Image"
            fieldName="frontImage"
            value={formProps.values.frontImage}
            uploadHandler={(e) =>
              formProps.setFieldValue("frontImage", e.currentTarget.files[0])
            }
          />
          <h3>Back Text:</h3>
          <textarea
            name="backText"
            className="textarea"
            value={formProps.values.backText}
            onChange={formProps.onChange}
          />
          <FileUploader
            title="Back Image"
            fieldName="backImage"
            value={formProps.values.backImage}
            uploadHandler={(e) =>
              formProps.setFieldValue("backImage", e.currentTarget.files[0])
            }
          />
          <Button buttonStyle="primary" onClickHandler={formProps.onSubmit}>
            {" "}
            Add Card{" "}
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default CreateCard
