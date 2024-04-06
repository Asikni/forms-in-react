import React from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import Upload from "./UploadComponent";
const UploadImageFormik = () => {
  return (
    <div>
      <h1>Upload Image</h1>
      <Formik
        initialValues={{
          file: null,
          thumbnailUrl: null,
          fullSizeUrl: null,
          uploadProgress: 0,
          uploadStatus: "",
          imageUrl: "",
          selectedUrl:"https://mvp-lit-list-dev.s3.eu-west-2.amazonaws.com/og/78e1c9a894ec9dc651387fce1bfe949b.jpg"
        }}
        onSubmit={async (values, { setFieldValue }) => {
          const { file } = values;

          if (!file) {
            setFieldValue("uploadStatus", "No file selected");
            return;
          }

          setFieldValue("uploadStatus", "Uploading...");
          const formData = new FormData();
          formData.append("file", file);

          try {
            const response = await axios.post(
              "https://mvp-lit-list.saibbyweb.com/uploadImage",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                  const progress = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                  );
                  setFieldValue("uploadProgress", progress);
                },
              }
            );

            setFieldValue("uploadStatus", "Upload successful");
            setFieldValue("imageUrl", response.data.location);

            const fullSizeUrl = URL.createObjectURL(file);
            setFieldValue("fullSizeUrl", fullSizeUrl);

            // Generate thumbnail URL
            const reader = new FileReader();
            reader.onload = () => {
              setFieldValue("thumbnailUrl", reader.result);
            };
            reader.readAsDataURL(file);
          } catch (error) {
            setFieldValue("uploadStatus", "Upload failed");
            console.error(error);
          } finally {
            setFieldValue("uploadProgress", 0);
          }
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Upload setFieldValue={setFieldValue} values={values} value={values.selectedUrl}/>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UploadImageFormik;
