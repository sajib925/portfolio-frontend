"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type WorkSliderBtns = {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
};
export const WorkSliderBtns = ({
  containerStyles,
  iconsStyles,
  btnStyles,
}: WorkSliderBtns) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};
