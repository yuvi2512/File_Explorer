import  react,{useState} from 'react';
import { FaFolder, FaFolderOpen, FaFile, FaTrash } from "react-icons/fa";

const TreeView =({item,setSelectedFile,onDelete })=>{
    const [expanded, setExpanded] = useState(false);
    
    const handleToggle = () => {
        setExpanded(!expanded);
    };
    
    const handleSelect = () => {
        setSelectedFile(item);
    };
    
    const handleDelete = () => {
        onDelete(item.id);
    };
    
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "5px" }}>
        {item.type === "folder" ? (
            expanded ? (
            <FaFolderOpen onClick={handleToggle} style={{ cursor: "pointer" }} />
            ) : (
            <FaFolder onClick={handleToggle} style={{ cursor: "pointer" }} />
            )
        ) : (
            <FaFile />
        )}
        <span onClick={handleSelect} style={{ cursor: "pointer" }}>{item.name}</span>
        <FaTrash onClick={()=>handleDelete(item?.id)} style={{ cursor: "pointer" }} />
        {expanded && item.Children && item.Children.map((child) => (
            <TreeView key={child.id} item={child} setSelectedFile={setSelectedFile} onDelete={onDelete} />
        ))}
        </div>
    );

}

export default TreeView;
