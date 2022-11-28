import React from 'react';
import {slide_01, slide_02, slide_05} from "data/preview/unlimint-mobile";
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
        preview={slide_02}
        image="/img/unlimint-ibank-mobile/slide_02.jpg"
        alt="unlimint bank mobile" />

      <ProgressiveImage
        preview={slide_05}
        image="/img/unlimint-ibank-mobile/slide_05.jpg"
        alt="unlimint bank mobile" />



    </div>
  );
}
