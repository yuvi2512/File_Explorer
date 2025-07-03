import React from "react";

const FileViewer = ({ selectedFile }) => {
  return (
    <>
      <div className="file-viewer">
        {selectedFile ? (
          <>
            <h3>{selectedFile?.name}</h3>
            <p>{selectedFile?.context}</p>
          </>
        ) : (
          <p>Select file to view</p>
        )}
      </div>
    </>
  );
};

export default FileViewer;
