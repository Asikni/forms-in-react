import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [fullSizeUrl, setFullSizeUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event) => {
    setFullSizeUrl("");
    setImageUrl("");
    setUploadStatus("");
    const selectedFile = event.target.files[0]; //select one file

    setFile(selectedFile);

    // Generate thumbnail URL
    const reader = new FileReader(); //FileReader is a built-in JavaScript object that allows you to read the contents of files asynchronously.
    reader.onload = () => {
      setThumbnailUrl(reader.result); // The result property contains the data URL representing the file's contents.
    };
    reader.readAsDataURL(selectedFile); // reads the contents of the specified File or Blob object and converts it to a data URL representing the file's data.

    //When you call readAsDataURL, it initiates the process of reading the contents of the file. However, this process is asynchronous, meaning that it takes some time to complete.
    //So, readAsDataURL itself doesn't immediately provide the result. It's only when the reading process is completed and the onload event is fired that the result becomes available.
    // Therefore, readAsDataURL is indeed dependent on onload.

    //So, in summary, readAsDataURL starts the file reading process immediately, but it doesn't block the rest of your code.
    // It's asynchronous. When the file reading is complete, the onload event is triggered, and that's when you update the state with the file's contents.
    //So reader.result depends on what readasdataurl takes as input
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
        //The reason for performing a POST request to upload a file is to transfer the file data from the client-side
        //environment to a server-side endpoint. While you have access to the file data locally in the client-side environment, it's typically necessary to upload the file to a server for various reasons:
        //1. we might wanna resize the images, extract text, backup, share with other people etc.

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

        // Extracting full-size image URL from the response

        const fullSizeUrl = URL.createObjectURL(file); //gets the urls that represent content of the file..just like readAsDataURL

        //URL.createObjectURL(file) generates a URL representing the file's contents, typically when the file is already available in the client-side environment.
        //reader.readAsDataURL(selectedFile) initiates the reading of the file's contents and generates a data URL dynamically, typically used when you need to read the file's contents asynchronously.
        setFullSizeUrl(fullSizeUrl);
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
      {/* <button onClick={handleUpload}>Upload</button> */}
      <Button onclick={handleUpload}>Upload</Button>
      {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
      <p>
        <div className="uploadStatus">{uploadStatus}</div>
        {uploadStatus === "Uploading..." && thumbnailUrl && (
          <img
            src={thumbnailUrl}
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

      {uploadStatus === "Upload successful" && fullSizeUrl && (
        <img src={fullSizeUrl} alt="Full Size" style={{ maxWidth: "300px" }} />
      )}
    </div>
  );
};

export default UploadImage;






