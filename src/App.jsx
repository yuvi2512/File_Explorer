import React, { useState } from 'react';
import Home from './components/Home';
import { data } from './data.jsx';
import Panel from './components/Panel';
import FileViewer from './components/FileViewer';
import './App.css';

function App() {
  const [fileSystem, setFileSystem] = useState(data);
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="App">
      <div className="panel">
        <Panel fileSystem={fileSystem} setFileSystem={setFileSystem} />
      </div>
      <div className="container">
        <div className="home-wrapper">
          <Home
            fileSystem={fileSystem}
            setSelectedFile={setSelectedFile}
            setFileSystem={setFileSystem}
          />
        </div>
        <div className="viewer-wrapper">
          <FileViewer selectedFile={selectedFile} setSelectedFil={setSelectedFile} />
        </div>
      </div>
    </div>
  );
}

export default App;
