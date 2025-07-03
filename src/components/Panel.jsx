import react, { useState } from "react";

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
    <div className="panel">
      <input
        placeholder="Id"
        value={Id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={type} onChange={e=> setType(e.target.value)}>
        <option value="file">File</option>
          <option value="folder">Folder</option>
        </select>

        <button onClick={handleCreate}>Add</button>
    </div>
  );
};

export default Panel;
