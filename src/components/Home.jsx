import React, { Children, useState } from "react";
import TreeView from "./TreeView";

const Home = ({ fileSystem, setSelectedFile, setFileSystem }) => {
  const removeItem = (prev, id) =>
    prev
      .filter((item) => item.id !== id)
      .map((item) => ({
        ...item,
        Children: item.Children ? removeItem(item.Children, id) : [],
      }));

  const renameItem = (prev, id, newName) =>
    prev.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: newName,
        };
      }
      return {
        ...item,
        Children: item.Children ? renameItem(item.Children, id, newName) : [],
      };
    });

  const handleRemoveItem = (id) => {
    setFileSystem((prev) => removeItem(prev, id));
    setSelectedFile("");
  };

  const handleRenameItem = (id, newName) => {
    setFileSystem((prev) => renameItem(prev, id, newName));
  };

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
            onRename={handleRenameItem}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
