import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function FileUpload() {

  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const handleUpload = async () => {
    // Post files to server
    // Could call API client here 
  };

  const thumbs = files.map(file => (
    <div key={file.name}>
     <div>
        {file.name} 
     </div>
    </div>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <button type="button" onClick={handleUpload}>
          Upload Files
        </button>
      </div>
      <aside>
        {thumbs}
      </aside>
    </section>
  );
}

export default FileUpload;