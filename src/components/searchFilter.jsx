import React, { useState } from "react";
import "../TagSelector.css";
import Button from "./Button";
function TagSelector() {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]); // used to remove whitespace from both ends of a string.
      setInputValue("");
    } else if (e.key === "Backspace" && inputValue === "") {
      // Check if input value is empty before removing the last tag
      setTags(tags.slice(0, -1)); //creates new array without last element
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove)); //get every element in the array and choose if we want to keep that element...
  };

  return (
    <div className="tag-selector">
      <div className="tag-list">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            <div className="individualTag">{tag}</div>
            <Button
              classname="crossButton"
              onclick={() => handleTagRemove(tag)}
            >
              &times;
            </Button>
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
