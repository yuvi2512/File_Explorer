import react,{useState} from 'react';
import Home from './components/Home';
import {data} from './data.jsx';
import Panel from './components/Panel';
import './App.css';
import FileViewer from './components/FileViewer';

function App(){
  const [fileSystem, setFileSystem] = useState(data)
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="App">
      <Panel fileSystem={fileSystem} setFileSystem={setFileSystem} />
      <div className="container">
     <Home fileSystem={fileSystem} setSelectedFile={setSelectedFile} setFileSystem={setFileSystem} /> 
     <FileViewer selectedFile={selectedFile} setSelectedFil={setSelectedFile} />
     </div>
    </div>
  );
}

export default App;