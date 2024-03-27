import { useState, useEffect } from "react";

function SearchFilter() {
  const [isInput, setIsInput] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsInput(event.target.value);
    }
  };

  useEffect(() => {
   <div style={{border:"1px solid red"}}>{isInput}</div>
  }, [isInput]);

  return (
    <div>
      <div>Search Filter</div>
      <div>
        <input type="text" onKeyDown={handleKeyPress} />
      </div>
    </div>
  );
}

export default SearchFilter;
