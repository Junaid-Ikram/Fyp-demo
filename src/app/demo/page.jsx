"use client";
import React, { useState } from "react";
import "./CascadeSelect.css";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, pending, uploaded

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFilePreview(URL.createObjectURL(selectedFile));
    setUploadStatus("idle");
  };

  const handleUpload = () => {
    if (file) {
      setUploadStatus("pending");
      setTimeout(() => {
        setUploadStatus("uploaded");
      }, 2000); // Simulate upload delay
    }
  };

  const handleCancel = () => {
    setFile(null);
    setFilePreview(null);
    setUploadStatus("idle");
    document.getElementById("fileInput").value = ""; // Reset the file input value
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="upload-container">
      <div className="actions">
        <button
          className="choose-btn"
          onClick={triggerFileInput}
          disabled={uploadStatus === "uploaded"} // Disable after upload
        >
          + Choose
        </button>
        <input
          id="fileInput"
          type="file"
          accept="image/*" // Restrict to images only
          onChange={handleFileChange}
          style={{ display: "none" }}
          disabled={uploadStatus === "uploaded"} // Disable input after upload
        />
        {file && uploadStatus !== "uploaded" && (
          <button className="upload-btn" onClick={handleUpload}>
            Upload
          </button>
        )}
        {file && uploadStatus !== "uploaded" && (
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </div>

      <div className="file-section">
        {!file && (
          <p className="upload-instruction">
            Upload Your CNIC image for Verification by Clicking Button or Drag
            and Drop
          </p>
        )}
        {file && (
          <div className="file-info">
            <div className="file-details">
              <span className="file-name">{file.name}</span>
              <span className="file-size">
                {(file.size / 1024).toFixed(2)} KB
              </span>
              {uploadStatus === "pending" && (
                <span className="file-status pending">Pending</span>
              )}
              {uploadStatus === "uploaded" && (
                <span className="file-status uploaded">Uploaded</span>
              )}
            </div>
            {filePreview && (
              <img
                src={filePreview}
                alt="Selected file preview"
                className="file-preview"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
