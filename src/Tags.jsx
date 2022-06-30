import React from "react";
import Tag from "./Tag";

function Tags(props) {
  return (
    <div className="tags">
      {props.tags.map((tag, index) => {
        return (
          <Tag
            key={index}
            tag={tag}
            index={index}
            deleteTag={props.deleteTag}
          />
        );
      })}
    </div>
  );
}

export default Tags;
