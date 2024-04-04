import React, { useRef } from "react";
import SliderComponent from "../schemas/sliderSchema";
import sliderData from "../components/sliderData";

function Slider() {
  const sliderParentRef = useRef(null);

  return (
    <div>
      <div
        className="sliderParent"
        ref={sliderParentRef}
        style={{
        }}
      >
        {sliderData.map((data, index) => (
          <div
            key={index}
            className="sliderChildren"
            style={{
              flex: "0 0 auto", // Prevent flex children from growing
              width: "50%", // Ensure each slide takes full width
            }}
          >
            <SliderComponent
              name={data.Name}
              place={data.Place}
              contact={data.Contact}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
