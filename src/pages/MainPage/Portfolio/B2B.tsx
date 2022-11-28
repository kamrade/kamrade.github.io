import React from 'react';
import {slide_01, slide_02, slide_03, slide_04} from "data/preview/b2bcards";
import {ProgressiveImage} from "shared/ProgressiveImage/ProgressiveImage";
import {BackToMain} from "shared";


export const B2B = () => {
  return (
    <div>

      <BackToMain/>

      <ProgressiveImage
        preview={slide_01}
        image="/img/b2bcards/slide_01.jpg"
        alt="b2b-cards" />

      <ProgressiveImage
        preview={slide_02}
        image="/img/b2bcards/slide_02.jpg"
        alt="b2b-cards" />

      <ProgressiveImage
        preview={slide_03}
        image="/img/b2bcards/slide_03.jpg"
        alt="b2b-cards" />

      <ProgressiveImage
        preview={slide_04}
        image="/img/b2bcards/slide_04.jpg"
        alt="b2b-cards" />

    </div>
  );
}
