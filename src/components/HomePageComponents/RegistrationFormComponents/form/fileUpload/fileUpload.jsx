"use client";
import { useState } from "react";
import React from "react";
import "./fileUpload.css";

export default function FileUploadComponent({
  headings,
  fileUploaded,
  fileInputId,
}) {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle");

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
        fileUploaded(true);
      }, 2000);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setFilePreview(null);
    setUploadStatus("idle");
    document.getElementById(fileInputId).value = "";
  };

  const triggerFileInput = () => {
    document.getElementById(fileInputId).click();
  };

  return (
    <div className="upload-container">
      <div className="actions">
        <button
          className="choose-btn"
          onClick={triggerFileInput}
          disabled={uploadStatus === "uploaded"}
        >
          + Choose
        </button>
        <input
          id={fileInputId}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          disabled={uploadStatus === "uploaded"}
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
        {!file && <p className="upload-instruction">{headings}</p>}
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
}
