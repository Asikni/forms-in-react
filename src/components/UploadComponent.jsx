function Upload({ setFieldValue, values, value }) {
  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={(event) => {
          const selectedFile = event.currentTarget.files[0];
          setFieldValue("file", selectedFile);

          // Generate thumbnail URL for the selected file
          const reader = new FileReader();
          reader.onload = () => {
            setFieldValue("thumbnailUrl", reader.result);
          };
          reader.readAsDataURL(selectedFile);
        }}
      />
      <button type="submit">Upload</button>

      {values.uploadProgress > 0 && (
        <progress value={values.uploadProgress} max="100" />
      )}
      <p>
        <div className="uploadStatus">{values.uploadStatus}</div>
        {values.uploadStatus === "Uploading..." && values.thumbnailUrl && (
          <img
            src={values.thumbnailUrl}
            alt="Thumbnail"
            style={{ maxWidth: "50px" }}
          />
        )}
        {value && (
          <img src={value} alt="Thumbnail" style={{ maxWidth: "50px" }} />
        )}
      </p>

      {values.imageUrl && (
        <div>
          <a href={values.imageUrl} target="_blank" rel="noopener noreferrer">
            {values.imageUrl}
          </a>
        </div>
      )}

      {values.uploadStatus === "Upload successful" && values.fullSizeUrl && (
        <img
          src={values.fullSizeUrl}
          alt="Full Size"
          style={{ maxWidth: "300px" }}
        />
      )}
    </div>
  );
}

export default Upload;
