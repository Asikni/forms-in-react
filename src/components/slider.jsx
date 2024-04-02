import SliderComponent from "../schemas/sliderSchema";
import sliderData from "../components/sliderData";
import { useRef } from "react";

function Slider() {
  const boxWidth = 20;
  const isMoving = useRef(null);
  const handleClickRight = () => {
    if (isMoving.current) {
      const currentPosition =
        parseFloat(isMoving.current.style.marginLeft) || 0; //nothing at first

      const newPosition = currentPosition - boxWidth; // Incrementally move by 25vw
      if (newPosition > -(sliderData.length * boxWidth - 4 * boxWidth)) {
        isMoving.current.style.marginLeft = `${newPosition}vw`;
      }
    }
  };
  const handleClickLeft = () => {
    if (isMoving.current) {
      const currentPosition =
        parseFloat(isMoving.current.style.marginLeft) || 0;
      const newPosition = currentPosition + boxWidth; // Incrementally move by 25vw
      console.log(newPosition);
      if (newPosition < 0) {
        isMoving.current.style.marginLeft = `${newPosition}vw`;
      }
    }
  };

  return (
    <div>
      <div
        className="sliderParent"
        style={{
          width: `${sliderData.length * boxWidth}vw`,
        }}
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
      <div className="twoArrows">
        <div className="arrow" onClick={handleClickLeft}>
          &lt;
        </div>
        <div
          className="arrow"
          style={{ left: "-100px" }}
          onClick={handleClickRight}
        >
          &gt;
        </div>
      </div>
    </div>
  );
}

export default Slider;
