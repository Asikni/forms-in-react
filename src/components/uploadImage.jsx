import React, { useState } from "react";
import axios from "axios";

const UploadImage = () => {
  const [files, setFiles] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [uploadStatus, setUploadStatus] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [fullSizeUrls, setFullSizeUrls] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setFullSizeUrls([]);
    setImageUrls([]);
    setUploadStatus(Array.from({ length: files.length }));
    const selectedFiles = event.target.files;
    const selectedThumbnails = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const reader = new FileReader();
      reader.onload = () => {
        selectedThumbnails.push(reader.result);
        setThumbnails([...selectedThumbnails]);
      };
      reader.readAsDataURL(file);
    }

    setFiles([...selectedFiles]);
  };

  const handleUpload = () => {
    if (files.length === 0) {
      setUploadStatus(["No file selected"]);
      return;
    }

    const uploadPromises = [];
    setUploadStatus(Array.from({ length: files.length }).fill("Uploading..."));

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);
      uploadPromises.push(
        axios.post("https://mvp-lit-list.saibbyweb.com/uploadImage", formData, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          },
        })
      );
    }

    Promise.all(uploadPromises)
      .then((responses) => {
        const urls = responses.map((response) => response.data.location);
        setImageUrls(urls);
        setUploadStatus(
          Array.from({ length: files.length }).fill("Upload successful")
        );
        // Extracting full-size image URLs from the responses
        const fullSizeUrls = files.map((file, index) =>
          URL.createObjectURL(file)
        );
        setFullSizeUrls(fullSizeUrls);
      })
      .catch((error) => {
        console.error(error);
        setUploadStatus(
          Array.from({ length: files.length }).fill("Upload failed")
        );
      })
      .finally(() => {
        setUploadProgress(0);
      });
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleFileChange} multiple />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
      {thumbnails.map((thumbnail, index) => (
        <div key={index}>
          {uploadStatus[index] && <p>{uploadStatus[index]}</p>}
          {uploadStatus[index] === "Uploading..." && (
            <img
              src={thumbnail}
              alt={`Thumbnail ${index}`}
              style={{ maxWidth: "50px" }}
            />
          )}
          {imageUrls[index] && (
            <div>
              <a href={imageUrls[index]}>{imageUrls[index]}</a>
            </div>
          )}
          {fullSizeUrls[index] && (
            <img
              src={fullSizeUrls[index]}
              alt={`Full Size ${index}`}
              style={{ maxWidth: "300px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default UploadImage;
