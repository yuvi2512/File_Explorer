import React, { Children, useState } from "react";
import TreeView from "./TreeView";

const Home = ({ fileSystem, setSelectedFile, setFileSystem }) => {


    const removeItem =(prev,id)=>
        prev
    .filter(item=>item.id !== id)
        .map(item=>({
            ...item,
            Children: item.Children ? removeItem(item.Children, id) : []
        }))


  const handleRemoveItem = (id) => {
    setFileSystem(prev=> removeItem(prev,id));
    setSelectedFile('');
  }


  return (
    <>
      <div className="Home">
        {fileSystem.map((item) => (
          <TreeView
            key={item.id}
            item={item}
            setSelectedFile={setSelectedFile}
            setFileSystem={setFileSystem}
            onDelete={handleRemoveItem}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
