import React from 'react';
import {slide_01, slide_02, slide_03, slide_04} from "data/images/b2bcards";
import {ProgressiveImage} from "shared/ProgressiveImage/ProgressiveImage";
import {BackToMain} from "shared";


export const Mbank = () => {
  return (
    <div>

      <BackToMain/>

      <ProgressiveImage
        preview={slide_01}
        image="/img/unlimint-ibank-mobile/slide_01.jpg"
        alt="unlimint bank mobile" />

      <ProgressiveImage
        preview={slide_01}
        image="/img/unlimint-ibank-mobile/slide_02.jpg"
        alt="unlimint bank mobile" />

      <ProgressiveImage
        preview={slide_01}
        image="/img/unlimint-ibank-mobile/slide_05.jpg"
        alt="unlimint bank mobile" />



    </div>
  );
}
