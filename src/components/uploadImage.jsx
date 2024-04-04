import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [fullSizeUrl, setFullSizeUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  const [response, setResponse] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Generate thumbnail URL
    const reader = new FileReader();
    reader.onload = () => {
      setThumbnailUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      setUploadStatus("No file selected");
      return;
    }

    setUploadStatus("Uploading...");
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("https://mvp-lit-list.saibbyweb.com/uploadImage", formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setUploadStatus("Upload successful");
        setResponse(response.data.location);

        // Extracting full-size image URL from the response
        const imageUrl = response.data.url; // Change 'url' to the correct property name
        const fullSizeUrl = URL.createObjectURL(file);
        setFullSizeUrl(fullSizeUrl);
      })
      .catch((error) => {
        setUploadStatus("Upload failed");
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
      <p>{uploadStatus}</p>
      <Link to="https://www.google.com">Go to Google</Link>
      {uploadStatus === "Uploading..." && thumbnailUrl && (
        <img src={thumbnailUrl} alt="Thumbnail" style={{ maxWidth: "50px" }} />
      )}
      {uploadStatus === "Upload successful" && fullSizeUrl && (
        <img src={fullSizeUrl} alt="Full Size" style={{ maxWidth: "300px" }} />
      )}
    </div>
  );
};

export default UploadImage;
