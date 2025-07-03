import React, { useState } from "react";

const Panel = ({ fileSystem, setFileSystem }) => {
  const [Id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleCreate = () => {
    const id = Date.now();

    const newItem = {
      id,
      name,
      type,
      ...(type === "folder" ? { Children: [] } : { content: "new content" }),
    };

    const insert = (items) =>
      items.map((item) => {
        if (item.id === Id && item.type === "folder") {
          return { ...item, children: [...item.Children, newItem] };
        }

        if (item.Children) {
          return { ...item, children: insert(item.Children) };
        }

        return item;
      });

    setFileSystem((prev) => {
      return [...insert(prev), newItem];
    });

    setName("");
    setId("");
  };

  return (
    <div style={styles.panel}>
      <h3 style={styles.heading}>Add File/Folder</h3>
      <input
        style={styles.input}
        placeholder="Parent Folder ID"
        value={Id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        style={styles.input}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select style={styles.select} value={type} onChange={e => setType(e.target.value)}>
        <option value="" disabled>Select type</option>
        <option value="file">File</option>
        <option value="folder">Folder</option>
      </select>
      <button style={styles.button} onClick={handleCreate}>Add</button>
    </div>
  );
};

const styles = {
  heading: {
    margin: "0 0 10px",
    fontSize: "18px",
    color: "#333",
    textAlign: "center"
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none"
  },
  select: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#fff"
  },
  button: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.2s"
  }
};

export default Panel;
