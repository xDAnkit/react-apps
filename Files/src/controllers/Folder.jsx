import { useState } from "react";

export const Folder = ({ tree }) => {
  const [expand, setExpand] = useState(false);
  if (!tree?.isFolder) {
    return (
      <>
        <div>{tree.name}</div>
      </>
    );
  }

  return (
    <>
      <span onClick={() => setExpand(!expand)}>
        -{tree.name}
        <br />
      </span>
      <div style={{ display: expand ? "block" : "none", padding: "5px" }}>
        {tree.items.map((node) => {
          return <Folder tree={node} />;
        })}
      </div>
    </>
  );
};
