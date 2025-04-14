import React from "react";
import './App.css';
import FileUpload from "./components/FileUpload";
import SalesData from "./components/SalesData";
import UploadHistory from "./components/UploadHistory";
import Customers from "./components/Customers";
import Products from "./components/Products";

function App() {

  return (
    <>
      <div id="container-parent">
        <FileUpload/>
        <UploadHistory/>
        <SalesData/>
        <Customers/>
        <Products/>
      </div>
    </>
  )
}

export default App
