// src/components/FileUpload/FileUpload.js
import React from 'react';
import FileDisplay from './FileDisplay';

const FileUpload = () => {
  // Functionality for file upload
  
  return (
    <div>
      <input type="file" />
      <FileDisplay />
    </div>
  );
};

export default FileUpload;
