import React from 'react';
import {slide_01, slide_02, slide_03, slide_04, slide_05} from "data/images/extreme-waves";
import {ProgressiveImage} from "shared/ProgressiveImage/ProgressiveImage";
import {BackToMain} from "shared";

export const ExtremeWaves = () => {
  return (
    <div>

      <BackToMain/>

      <ProgressiveImage
        preview={slide_01}
        image="/img/extreme-waves/slide_01.jpg"
        alt="extreme-waves-rally" />

      <ProgressiveImage
        preview={slide_02}
        image="/img/extreme-waves/slide_02.jpg"
        alt="extreme-waves-rally" />

      <ProgressiveImage
        preview={slide_03}
        image="/img/extreme-waves/slide_03.jpg"
        alt="extreme-waves-rally" />

      <ProgressiveImage
        preview={slide_04}
        image="/img/extreme-waves/slide_04.jpg"
        alt="extreme-waves-rally" />

      <ProgressiveImage
        preview={slide_05}
        image="/img/extreme-waves/slide_05.jpg"
        alt="extreme-waves-rally" />

    </div>
  );
}
