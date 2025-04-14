import React from "react";
import './App.css';
import FileUpload from "./components/FileUpload";
import SalesData from "./components/SalesData";
import UploadHistory from "./components/UploadHistory";

function App() {

  return (
    <>
      <div id="container-parent">
        <FileUpload/>
        <UploadHistory/>
        <SalesData/>
      </div>
    </>
  )
}

export default App
