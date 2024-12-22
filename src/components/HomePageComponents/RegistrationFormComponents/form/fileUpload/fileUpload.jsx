import React from "react";
import { FileUpload } from "primereact/fileupload";
import "primereact/resources/themes/lara-light-purple/theme.css";
import "primeicons/primeicons.css";
export default function FileUploadComponent() {
  return (
    <div className="card">
      <FileUpload
        name="demo[]"
        url={"/api/upload"}
        multiple
        accept="image/*"
        maxFileSize={1000000}
        emptyTemplate={
          <p className="m-0">
            Drag and drop CNIC img to upload for verification
          </p>
        }
      />
    </div>
  );
}
