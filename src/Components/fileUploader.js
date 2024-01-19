import React, { useState } from "react";
import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
import XHRUpload from "@uppy/xhr-upload";
import Url from '@uppy/url';
import { Dashboard } from "@uppy/react";
import { useNavigate } from "react-router-dom";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";

// const uppy = new Uppy().use(Webcam)

function FileUploader() {
  let navigate = useNavigate();
  function goHome() {
    navigate("/home");
  }
  const { user, isAuthenticated, isLoading } = useKindeAuth();
  const { login, register, logout } = useKindeAuth();

  const [uppy] = useState(() =>
    new Uppy().use(Webcam).use(XHRUpload, {
      // endpoint: "http://127.0.0.1:3001/upload",
      endpoint: "https://photohub-api.vercel.app/upload",
      formData: true,
      bundle: true,
    })
    // .use(Url, {
    //   target: Dashboard,
    //   companionUrl: 'https://demos.transloadit.com/',
    // })
  );

  console.log("user")
  // console.log(user)

  
    if(user){
  uppy.setMeta({userId: user.id});
    }

    return (
      <div className="h-fit w-fit my-auto mx-auto">
        {!user ? (
          goHome()
        ) : (
          <Dashboard uppy={uppy} plugins={["Webcam"]} />
        )}
      </div>
    );
    
}

export default FileUploader;
