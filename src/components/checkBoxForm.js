import { useRef, useState, useEffect } from "react";

function Checkbox() {
  const [ischeckedBlue, setIsCheckedBlue] = useState(false);
  const [ischeckedGreen, setIsCheckedGreen] = useState(false);
  const checkBoxOneRef = useRef(null);
  const checkBoxTwoRef = useRef(null);

  const handleToggleOne = () => {
    setIsCheckedBlue(!ischeckedBlue);
    ischeckedBlue ? setIsCheckedGreen(false) : setIsCheckedGreen(null)
    
  };
  const handleToggleTwo = () => {
    setIsCheckedGreen(!ischeckedGreen);
    ischeckedGreen ? setIsCheckedBlue(false) : setIsCheckedBlue(null)
  };
  useEffect(() => {
    ischeckedBlue
      ? (checkBoxOneRef.current.style.backgroundColor = "blue")
      : (checkBoxOneRef.current.style.backgroundColor = "");
  }, [ischeckedBlue]);
  useEffect(() => {
    ischeckedGreen
      ? (checkBoxTwoRef.current.style.backgroundColor = "green")
      : (checkBoxTwoRef.current.style.backgroundColor = "");
  }, [ischeckedGreen]);

  return (
    <div style={{ display: "flex" }}>
      <div className="parent">
        <div className="checkBoxOne">This is checkbox one</div>
        <div
          className="checkBoxOneSelectOne"
          ref={checkBoxOneRef} 
          onClick={handleToggleOne}
        ></div>
      </div>
      <div className="parent">
        <div>This is checkbox two</div>
        <div className="checkBoxOneSelectTwo" onClick={handleToggleTwo} ref={checkBoxTwoRef}></div>
      </div>
    </div>
  );
}

export default Checkbox;
