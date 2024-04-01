import React, { useRef, useEffect, useState } from "react";
import SliderComponent from "../schemas/sliderSchema";
import sliderData from "../components/sliderData";

function Slider() {
  const sliderParentRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    const detectTouchDevice = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.msMaxTouchPoints);
    };
    detectTouchDevice();
  }, []);

  const handleTouchStart = (event) => {
    setShowMessage(true);
    touchStartX.current = event.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    // const touchMoveX = event.touches[0].clientX;
    // touchDeltaX.current = touchMoveX - touchStartX.current;

    // if (sliderParentRef.current) {
    //   sliderParentRef.current.style.transition = "none";
    //   sliderParentRef.current.style.transform = `translateX(${touchDeltaX.current}px)`;
    // }
  };

  const handleTouchEnd = () => {
    if (touchDeltaX.current === 0 || touchStartX.current === null) {
      return;
    }

    const threshold = 50; // Minimum swipe distance to trigger slide change
    if (touchDeltaX.current < -threshold) {
      handleNextSlide();
    } else if (touchDeltaX.current > threshold) {
      handlePrevSlide();
    } else {
      resetSliderPosition();
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const handleNextSlide = () => {
    if (sliderParentRef.current) {
      const sliderWidth = sliderParentRef.current.offsetWidth;
      const maxOffset = -(sliderData.length - 1) * sliderWidth;
      const newLeftOffset = Math.max(maxOffset, touchDeltaX.current);
      sliderParentRef.current.style.transition = "transform 0.3s ease-in-out";
      sliderParentRef.current.style.transform = `translateX(${newLeftOffset}px)`;
    }
  };

  const handlePrevSlide = () => {
    if (sliderParentRef.current) {
      const newLeftOffset = Math.min(0, touchDeltaX.current);
      sliderParentRef.current.style.transition = "transform 0.3s ease-in-out";
      sliderParentRef.current.style.transform = `translateX(${newLeftOffset}px)`;
    }
  };

  const resetSliderPosition = () => {
    if (sliderParentRef.current) {
      sliderParentRef.current.style.transition = "transform 0.3s ease-in-out";
      sliderParentRef.current.style.transform = `translateX(0)`;
    }
  };

  return (
    <div>
      <div
        className="sliderParent"
        ref={sliderParentRef}
        onTouchStart={isTouchDevice ? handleTouchStart : undefined}
        onTouchMove={isTouchDevice ? handleTouchMove : undefined}
        onTouchEnd={isTouchDevice ? handleTouchEnd : undefined}
        style={{
          overflowX: "auto", // Allow scrolling if overflow
          width: "100%", // Ensure full width
         
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
      {showMessage && (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          Message displayed on touch start!
        </div>
      )}
    </div>
  );
}

export default Slider;
