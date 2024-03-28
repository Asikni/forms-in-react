import React, { useState } from "react";
import "../TagSelector.css"; 

function TagSelector() {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="tag-selector">
      <div className="tag-list">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            <span>{tag}</span>
            <button className="crossButton" onClick={() => handleTagRemove(tag)}>&times;</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type and press Enter to add tags"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyPress}
      />
    </div>
  );
}

export default TagSelector;
