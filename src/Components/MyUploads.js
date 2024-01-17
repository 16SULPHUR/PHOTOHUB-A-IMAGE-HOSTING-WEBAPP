import React, { useState, useEffect } from "react";
import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
import XHRUpload from "@uppy/xhr-upload";
import { Dashboard } from "@uppy/react";
import { useNavigate } from "react-router-dom";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";

function FileUploader() {
  let navigate = useNavigate();
  function goHome() {
    navigate("/home");
  }

  const { user, isAuthenticated, isLoading } = useKindeAuth();
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images when the component mounts
    if (isAuthenticated && user) {
      fetchImages();
    }
  }, [isAuthenticated, user]);

  const fetchImages = async () => {
    try {
      if (user) {

        // const response = await fetch(`http://127.0.0.1:3001/images?userId=${user.id}`);
        const response = await fetch(`https://photohub.vercel.app/images?userId=${user.id}`);
        if (response.ok) {
          const imagesData = await response.json();
          console.log(imagesData);
          setImages(imagesData);
        } else {
          console.error("Failed to fetch images");
        }
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      {!user ? (
        goHome()
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">My Uploads</h1>
          {/* Render the list of images */}
          <ul className="grid grid-cols-2 gap-4">
            {images.map((image) => (
              <li key={image.id} className="overflow-hidden rounded-md shadow-md w-40">
                <img
                  src={image.image.url}
                  alt={`Image ${image.id}`}
                  className="w-full h-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FileUploader;
