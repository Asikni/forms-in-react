import SliderComponent from "../schemas/sliderSchema";
import sliderData from "../components/sliderData";
import { useRef } from "react";

function Slider() {
  const isMoving = useRef(null);
  const handleClickRight = () => {
    if (isMoving.current) {
      const currentPosition =
        parseFloat(isMoving.current.style.marginLeft) || 0; //nothing at first


      const newPosition = currentPosition - 25; // Incrementally move by 25vw
      if (newPosition > -(sliderData.length * 25)) {
        isMoving.current.style.marginLeft = `${newPosition}vw`;
      }
    }
  };
  const handleClickLeft = () => {
    if (isMoving.current) {
      const currentPosition =
        parseFloat(isMoving.current.style.marginLeft) || 0;
      const newPosition = currentPosition + 25; // Incrementally move by 25vw
      console.log(newPosition);
      if(newPosition<0){
      isMoving.current.style.marginLeft = `${newPosition}vw`;}
    }
  };

  return (
    <div>
      <div
        className="sliderParent"
        style={{ width: `${sliderData.length * 25}vw` }}
        ref={isMoving}
      >
        {sliderData.map((data) => (
          <div className="sliderChildren">
            <SliderComponent
              name={data.Name}
              place={data.Place}
              contact={data.Contact}
            />{" "}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <div className="arrow" onClick={handleClickLeft}>
          &lt;
        </div>
        <div className="arrow" onClick={handleClickRight}>
          &gt;
        </div>
      </div>
    </div>
  );
}

export default Slider;
