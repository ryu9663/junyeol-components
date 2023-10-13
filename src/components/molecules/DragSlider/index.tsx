import { MouseEvent, PropsWithChildren, useRef, useState } from "react";
import styles from "./index.module.scss";

interface DragSliderProps extends PropsWithChildren {
  hideScrollbar?: boolean;
  hasCloudyArea?: boolean;
  className?: string;
}
export const DragSlider = ({
  children,
  className,
  hideScrollbar = false,
  hasCloudyArea = true,
}: DragSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);
  const [clickPoint, setClickPoint] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDownEvent = (e: MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    if (sliderRef.current) {
      setClickPoint(e.pageX);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseMoveEvent = (e: MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;

    e.preventDefault();

    if (sliderRef.current) {
      const walk = e.pageX - clickPoint;

      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  return (
    <div className={`${styles.dragslider_wrapper} ${className}`}>
      <div
        className={`${styles.slider} ${
          hideScrollbar && styles["slider_hide-scrollbar"]
        }`}
        ref={sliderRef}
        onMouseDown={handleMouseDownEvent}
        onMouseLeave={() => setDragging(false)}
        onMouseUp={() => setDragging(false)}
        onMouseMove={handleMouseMoveEvent}
      >
        {children}
      </div>
      {hasCloudyArea && <div className={styles["dragslider_cloudy-area"]} />}
    </div>
  );
};
