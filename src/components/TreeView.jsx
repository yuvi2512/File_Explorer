import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaFile, FaTrash, FaPen, FaCheck, FaTimes } from "react-icons/fa";
import { Card } from "@mui/material";

const TreeView = ({ item, setSelectedFile, onDelete, onRename }) => {
  const [expanded, setExpanded] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(item.name);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    setSelectedFile(item);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleRenameClick = () => {
    setIsRenaming(true);
  };

  const handleRenameConfirm = () => {
    onRename(item.id, newName.trim() || item.name); // Avoid empty names
    setIsRenaming(false);
  };

  const handleRenameCancel = () => {
    setNewName(item.name);
    setIsRenaming(false);
  };

  return (
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
        marginBottom: 1,
      }}
      elevation={6}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "5px",
        }}
      >
        {item.type === "folder" ? (
          expanded ? (
            <FaFolderOpen onClick={handleToggle} style={{ cursor: "pointer" }} />
          ) : (
            <FaFolder onClick={handleToggle} style={{ cursor: "pointer" }} />
          )
        ) : (
          <FaFile />
        )}

        {isRenaming ? (
          <>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{ flexGrow: 1 }}
            />
            <FaCheck onClick={handleRenameConfirm} style={{ cursor: "pointer", color: "green" }} />
            <FaTimes onClick={handleRenameCancel} style={{ cursor: "pointer", color: "red" }} />
          </>
        ) : (
          <>
            <span onClick={handleSelect} style={{ cursor: "pointer", flexGrow: 1 }}>
              {item.name}
            </span>
            <FaPen onClick={handleRenameClick} style={{ cursor: "pointer" }} />
            <FaTrash onClick={handleDelete} style={{ cursor: "pointer" }} />
          </>
        )}
      </div>

      {expanded &&
        item.Children &&
        item.Children.map((child) => (
          <div key={child.id} style={{ paddingLeft: 20 }}>
            <TreeView
              item={child}
              setSelectedFile={setSelectedFile}
              onDelete={onDelete}
              onRename={onRename}
            />
          </div>
        ))}
    </Card>
  );
};

export default TreeView;
