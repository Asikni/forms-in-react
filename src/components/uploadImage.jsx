import React, { useState } from "react";
import axios from "axios";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [displayImage, setdisplayImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    const selectedFile = event.target.files[0]; //select one file
    setFile(selectedFile);

    // Generate thumbnail URL
    const reader = new FileReader(); //FileReader is a built-in JavaScript object that allows you to read the contents of files asynchronously.
    reader.onload = () => {
      setdisplayImage(reader.result); // The result property contains the data URL representing the file's contents.
    };
    reader.readAsDataURL(selectedFile); // reads the contents of the specified File or Blob object and converts it to a data URL representing the file's data.
  };

  const handleUpload = () => {
    if (!file) {
      setUploadStatus("No file selected");
      return;
    }

    setUploadStatus("Uploading...");
    const formData = new FormData(); // This object is used to collect the data that will be sent to the server.
    formData.append("file", file);

    axios
      .post("https://mvp-lit-list.saibbyweb.com/uploadImage", formData, {
        onUploadProgress: (progressEvent) => {
          // option provided by Axios for handling upload progress events during file uploads.
          //The progressEvent object contains information about the progress of the upload operation, such as the number of bytes that have
          //been uploaded (loaded) and the total size of the file being uploaded (total).
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      })
      .then((response) => {
        setUploadStatus("Upload successful");
        setImageUrl(response.data.location); //to get the url of the image

      })
      .catch((error) => {
        setUploadStatus("Upload failed");
        console.error(error);
      })
      .finally(() => {
        setUploadProgress(0);
      });
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
      <p>
        <div className="uploadStatus">{uploadStatus}</div>
        {uploadStatus === "Uploading..." && displayImage && (
          <img
            src={displayImage}
            alt="Thumbnail"
            style={{ maxWidth: "50px" }}
          />
        )}
      </p>

      {{ imageUrl } ? (
        <div>
          <a href={`${imageUrl}`}>{imageUrl}</a>
        </div>
      ) : (
        ""
      )}

      {uploadStatus === "Upload successful" && displayImage && (
        <img src={displayImage} alt="Full Size" style={{ maxWidth: "300px" }} />
      )}
    </div>
  );
};

export default UploadImage;
