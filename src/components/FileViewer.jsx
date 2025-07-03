import React from "react";
import { Card, CardHeader } from "@mui/material";

const FileViewer = ({ selectedFile }) => {
  return (
    <>
      <div className="file-viewer">
        <Card
          sx={{
            width: "100%",
            padding: 2,
            borderRadius: 3,
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.2)",
            },
          }}
          elevation={6}
        >
          <CardHeader title="File Viewer" />
          {selectedFile ? (
            <>
              <h3>{selectedFile?.name}</h3>
              <p>{selectedFile?.context}</p>
            </>
          ) : (
            <p>Select file to view</p>
          )}
        </Card>
      </div>
    </>
  );
};

export default FileViewer;
