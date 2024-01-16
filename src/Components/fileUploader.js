

import React, { useState } from "react";
import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
import XHRUpload from "@uppy/xhr-upload";
import { Dashboard } from "@uppy/react";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";

// const uppy = new Uppy().use(Webcam)

function FileUploader() {
  const [uppy] = useState(
    () =>
      new Uppy().use(Webcam).use(XHRUpload, {
        endpoint: "http://127.0.0.1:3001/upload",
        formData: true,
        bundle: true,
      })
  );

  uppy.setMeta({ userId: 123, username: "john_doe" });

  return (
    <div className="">
      <Dashboard uppy={uppy} plugins={["Webcam"]} />
    </div>
  );
}

export default FileUploader;